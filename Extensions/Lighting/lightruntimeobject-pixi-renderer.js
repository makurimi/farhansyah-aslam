var gdjs;
(function(gdjs2) {
  const PIXI = GlobalPIXIModule.PIXI;
  const LightRuntimeObjectPixiRenderer2 = class {
    constructor(runtimeObject, runtimeScene) {
      this._texture = null;
      this._light = null;
      this._debugMode = null;
      this._debugLight = null;
      this._debugGraphics = null;
      this._object = runtimeObject;
      this._runtimeScene = runtimeScene;
      this._manager = runtimeObject.getObstaclesManager();
      this._radius = runtimeObject.getRadius();
      const objectColor = runtimeObject._color;
      this._color = [
        objectColor[0] / 255,
        objectColor[1] / 255,
        objectColor[2] / 255
      ];
      this.updateTexture();
      this._center = new Float32Array([runtimeObject.x, runtimeObject.y]);
      this._defaultVertexBuffer = new Float32Array(8);
      this._vertexBuffer = new Float32Array([
        runtimeObject.x - this._radius,
        runtimeObject.y + this._radius,
        runtimeObject.x + this._radius,
        runtimeObject.y + this._radius,
        runtimeObject.x + this._radius,
        runtimeObject.y - this._radius,
        runtimeObject.x - this._radius,
        runtimeObject.y - this._radius
      ]);
      this._indexBuffer = new Uint16Array([0, 1, 2, 0, 2, 3]);
      this.updateMesh();
      this._isPreview = runtimeScene.getGame().isPreview();
      this._lightBoundingPoly = new gdjs2.Polygon();
      for (let i = 0; i < 4; i++) {
        this._lightBoundingPoly.vertices.push(runtimeObject.getHitBoxes()[0].vertices[i]);
      }
      this.updateDebugMode();
      if (this._light) {
        runtimeScene.getLayer("").getRenderer().addRendererObject(this.getRendererObject(), runtimeObject.getZOrder());
      }
    }
    static _verticesWithAngleComparator(vertexWithAngleA, vertexWithAngleB) {
      if (vertexWithAngleA.angle < vertexWithAngleB.angle) {
        return -1;
      }
      if (vertexWithAngleA.angle > vertexWithAngleB.angle) {
        return 1;
      }
      return 0;
    }
    static _computeClosestIntersectionPoint(lightObject, angle, polygons, boundingSquareHalfDiag) {
      const centerX = lightObject.getX();
      const centerY = lightObject.getY();
      const targetX = centerX + boundingSquareHalfDiag * Math.cos(angle);
      const targetY = centerY + boundingSquareHalfDiag * Math.sin(angle);
      let minSqDist = boundingSquareHalfDiag * boundingSquareHalfDiag;
      const closestPoint = [null, null];
      for (const poly of polygons) {
        const raycastResult = gdjs2.Polygon.raycastTest(poly, centerX, centerY, targetX, targetY);
        if (raycastResult.collision && raycastResult.closeSqDist <= minSqDist) {
          minSqDist = raycastResult.closeSqDist;
          closestPoint[0] = raycastResult.closeX;
          closestPoint[1] = raycastResult.closeY;
        }
      }
      if (closestPoint[0] && closestPoint[1]) {
        return closestPoint;
      }
      return null;
    }
    getRendererObject() {
      if (this._debugLight) {
        return this._debugLight;
      }
      return this._light;
    }
    ensureUpToDate() {
      if (this._object.isHidden()) {
        return;
      }
      if (this._debugGraphics) {
        this._updateDebugGraphics();
      }
      this._updateBuffers();
    }
    updateMesh() {
      if (!PIXI.utils.isWebGLSupported()) {
        console.warn("This device does not support webgl, which is required for Lighting Extension.");
        return;
      }
      this.updateTexture();
      const fragmentShader = this._texture === null ? LightRuntimeObjectPixiRenderer2.defaultFragmentShader : LightRuntimeObjectPixiRenderer2.texturedFragmentShader;
      const shaderUniforms = {
        center: this._center,
        radius: this._radius,
        color: this._color
      };
      if (this._texture) {
        shaderUniforms.uSampler = this._texture;
      }
      const shader = PIXI.Shader.from(LightRuntimeObjectPixiRenderer2.defaultVertexShader, fragmentShader, shaderUniforms);
      const geometry = new PIXI.Geometry();
      geometry.addAttribute("aVertexPosition", this._vertexBuffer, 2).addIndex(this._indexBuffer);
      if (!this._light) {
        this._light = new PIXI.Mesh(geometry, shader);
        this._light.blendMode = PIXI.BLEND_MODES.ADD;
      } else {
        this._light.shader = shader;
        this._light.geometry = geometry;
      }
    }
    updateRadius() {
      if (!this._light) {
        return;
      }
      this._radius = this._object.getRadius();
      this._light.shader.uniforms.radius = this._radius;
    }
    updateColor() {
      if (!this._light) {
        return;
      }
      const objectColor = this._object._color;
      this._color = [
        objectColor[0] / 255,
        objectColor[1] / 255,
        objectColor[2] / 255
      ];
      this._light.shader.uniforms.color = this._color;
    }
    updateTexture() {
      const texture = this._object.getTexture();
      this._texture = texture !== "" ? this._runtimeScene.getGame().getImageManager().getPIXITexture(texture) : null;
    }
    updateDebugMode() {
      if (!this._light) {
        return;
      }
      this._debugMode = this._object.getDebugMode();
      if (!this._debugLight && (this._isPreview || this._debugMode)) {
        this._debugLight = new PIXI.Container();
        this._debugLight.addChild(this._light);
      }
      if (this._debugMode && !this._debugGraphics) {
        this._debugGraphics = new PIXI.Graphics();
        this._debugLight.addChild(this._debugGraphics);
      }
      if (!this._debugMode && this._debugGraphics) {
        this._debugLight.removeChild(this._debugGraphics);
        this._debugGraphics.destroy();
        this._debugGraphics = null;
      }
      this.ensureUpToDate();
    }
    _updateDebugGraphics() {
      const debugGraphics = this._debugGraphics;
      const computedVertices = this._computeLightVertices();
      if (!computedVertices.length) {
        debugGraphics.clear();
        debugGraphics.lineStyle(1, 16711680, 1).moveTo(this._object.x, this._object.y).lineTo(this._object.x - this._radius, this._object.y + this._radius).lineTo(this._object.x + this._radius, this._object.y + this._radius).moveTo(this._object.x, this._object.y).lineTo(this._object.x + this._radius, this._object.y + this._radius).lineTo(this._object.x + this._radius, this._object.y - this._radius).moveTo(this._object.x, this._object.y).lineTo(this._object.x + this._radius, this._object.y - this._radius).lineTo(this._object.x - this._radius, this._object.y - this._radius).moveTo(this._object.x, this._object.y).lineTo(this._object.x - this._radius, this._object.y - this._radius).lineTo(this._object.x - this._radius, this._object.y + this._radius);
        return;
      }
      const vertices = new Array(2 * computedVertices.length + 2);
      vertices[0] = this._object.x;
      vertices[1] = this._object.y;
      for (let i = 2; i < 2 * computedVertices.length + 2; i += 2) {
        vertices[i] = computedVertices[i / 2 - 1][0];
        vertices[i + 1] = computedVertices[i / 2 - 1][1];
      }
      debugGraphics.clear();
      debugGraphics.moveTo(vertices[2], vertices[3]);
      const verticesCount = vertices.length;
      for (let i = 2; i < verticesCount; i += 2) {
        const lineColor = i % 4 === 0 ? 16711680 : 65280;
        const lastX = i + 2 >= verticesCount ? 2 : i + 2;
        const lastY = i + 3 >= verticesCount ? 3 : i + 3;
        debugGraphics.lineStyle(1, lineColor, 1).lineTo(vertices[i], vertices[i + 1]).lineTo(vertices[lastX], vertices[lastY]).moveTo(vertices[0], vertices[1]).lineTo(vertices[i], vertices[i + 1]).moveTo(vertices[0], vertices[1]).lineTo(vertices[lastX], vertices[lastY]);
      }
    }
    _updateBuffers() {
      if (!this._light) {
        return;
      }
      this._center[0] = this._object.x;
      this._center[1] = this._object.y;
      const vertices = this._computeLightVertices();
      if (vertices.length === 0) {
        this._defaultVertexBuffer[0] = this._object.x - this._radius;
        this._defaultVertexBuffer[1] = this._object.y + this._radius;
        this._defaultVertexBuffer[2] = this._object.x + this._radius;
        this._defaultVertexBuffer[3] = this._object.y + this._radius;
        this._defaultVertexBuffer[4] = this._object.x + this._radius;
        this._defaultVertexBuffer[5] = this._object.y - this._radius;
        this._defaultVertexBuffer[6] = this._object.x - this._radius;
        this._defaultVertexBuffer[7] = this._object.y - this._radius;
        this._light.shader.uniforms.center = this._center;
        this._light.geometry.getBuffer("aVertexPosition").update(this._defaultVertexBuffer);
        this._light.geometry.getIndex().update(LightRuntimeObjectPixiRenderer2._defaultIndexBuffer);
        return;
      }
      const verticesCount = vertices.length;
      let isSubArrayUsed = false;
      let vertexBufferSubArray = null;
      let indexBufferSubArray = null;
      if (this._vertexBuffer.length > 2 * verticesCount + 2) {
        if (this._vertexBuffer.length < 4 * verticesCount + 4) {
          isSubArrayUsed = true;
          vertexBufferSubArray = this._vertexBuffer.subarray(0, 2 * verticesCount + 2);
          indexBufferSubArray = this._indexBuffer.subarray(0, 3 * verticesCount);
        } else {
          this._vertexBuffer = new Float32Array(2 * verticesCount + 2);
          this._indexBuffer = new Uint16Array(3 * verticesCount);
        }
      }
      if (this._vertexBuffer.length < 2 * verticesCount + 2) {
        this._vertexBuffer = new Float32Array(2 * verticesCount + 2);
        this._indexBuffer = new Uint16Array(3 * verticesCount);
      }
      this._vertexBuffer[0] = this._object.x;
      this._vertexBuffer[1] = this._object.y;
      for (let i = 2; i < 2 * verticesCount + 2; i += 2) {
        this._vertexBuffer[i] = vertices[i / 2 - 1][0];
        this._vertexBuffer[i + 1] = vertices[i / 2 - 1][1];
      }
      for (let i = 0; i < 3 * verticesCount; i += 3) {
        this._indexBuffer[i] = 0;
        this._indexBuffer[i + 1] = i / 3 + 1;
        if (i / 3 + 1 !== verticesCount) {
          this._indexBuffer[i + 2] = i / 3 + 2;
        } else {
          this._indexBuffer[i + 2] = 1;
        }
      }
      this._light.shader.uniforms.center = this._center;
      if (!isSubArrayUsed) {
        this._light.geometry.getBuffer("aVertexPosition").update(this._vertexBuffer);
        this._light.geometry.getIndex().update(this._indexBuffer);
      } else {
        this._light.geometry.getBuffer("aVertexPosition").update(vertexBufferSubArray);
        this._light.geometry.getIndex().update(indexBufferSubArray);
      }
    }
    _computeLightVertices() {
      const lightObstacles = [];
      if (this._manager) {
        this._manager.getAllObstaclesAround(this._object, this._radius, lightObstacles);
      }
      if (lightObstacles.length === 0) {
        return lightObstacles;
      }
      const lightHitboxPoly = this._object.getHitBoxes()[0];
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 2; j++) {
          this._lightBoundingPoly.vertices[i][j] = lightHitboxPoly.vertices[i][j];
        }
      }
      const obstaclesCount = lightObstacles.length;
      const obstacleHitBoxes = new Array(obstaclesCount);
      for (let i = 0; i < obstaclesCount; i++) {
        obstacleHitBoxes[i] = lightObstacles[i].owner.getHitBoxes();
      }
      const obstaclePolygons = [];
      obstaclePolygons.push(this._lightBoundingPoly);
      for (let i = 0; i < obstaclesCount; i++) {
        const noOfHitBoxes = obstacleHitBoxes[i].length;
        for (let j = 0; j < noOfHitBoxes; j++) {
          obstaclePolygons.push(obstacleHitBoxes[i][j]);
        }
      }
      let maxX = this._object.x + this._radius;
      let minX = this._object.x - this._radius;
      let maxY = this._object.y + this._radius;
      let minY = this._object.y - this._radius;
      const flattenVertices = [];
      for (let i = 1; i < obstaclePolygons.length; i++) {
        const vertices = obstaclePolygons[i].vertices;
        const verticesCount = vertices.length;
        for (let j = 0; j < verticesCount; j++) {
          flattenVertices.push(vertices[j]);
          if (vertices[j][0] < minX) {
            minX = vertices[j][0];
          }
          if (vertices[j][0] > maxX) {
            maxX = vertices[j][0];
          }
          if (vertices[j][1] < minY) {
            minY = vertices[j][1];
          }
          if (vertices[j][1] > maxY) {
            maxY = vertices[j][1];
          }
        }
      }
      obstaclePolygons[0].vertices[0][0] = minX;
      obstaclePolygons[0].vertices[0][1] = minY;
      obstaclePolygons[0].vertices[1][0] = maxX;
      obstaclePolygons[0].vertices[1][1] = minY;
      obstaclePolygons[0].vertices[2][0] = maxX;
      obstaclePolygons[0].vertices[2][1] = maxY;
      obstaclePolygons[0].vertices[3][0] = minX;
      obstaclePolygons[0].vertices[3][1] = maxY;
      const boundingSquareHalfDiag = Math.sqrt(Math.max((this._object.x - minX) * (this._object.x - minX) + (this._object.y - minY) * (this._object.y - minY), (maxX - this._object.x) * (maxX - this._object.x) + (this._object.y - minY) * (this._object.y - minY), (maxX - this._object.x) * (maxX - this._object.x) + (maxY - this._object.y) * (maxY - this._object.y), (this._object.x - minX) * (this._object.x - minX) + (maxY - this._object.y) * (maxY - this._object.y)));
      for (let i = 0; i < 4; i++) {
        flattenVertices.push(obstaclePolygons[0].vertices[i]);
      }
      const closestVertices = [];
      const flattenVerticesCount = flattenVertices.length;
      for (let i = 0; i < flattenVerticesCount; i++) {
        const xdiff = flattenVertices[i][0] - this._object.x;
        const ydiff = flattenVertices[i][1] - this._object.y;
        const angle = Math.atan2(ydiff, xdiff);
        const closestVertex = LightRuntimeObjectPixiRenderer2._computeClosestIntersectionPoint(this._object, angle, obstaclePolygons, boundingSquareHalfDiag);
        if (closestVertex) {
          closestVertices.push({vertex: closestVertex, angle});
        }
        const closestVertexOffsetLeft = LightRuntimeObjectPixiRenderer2._computeClosestIntersectionPoint(this._object, angle + 1e-4, obstaclePolygons, boundingSquareHalfDiag);
        if (closestVertexOffsetLeft) {
          closestVertices.push({
            vertex: closestVertexOffsetLeft,
            angle: angle + 1e-4
          });
        }
        const closestVertexOffsetRight = LightRuntimeObjectPixiRenderer2._computeClosestIntersectionPoint(this._object, angle - 1e-4, obstaclePolygons, boundingSquareHalfDiag);
        if (closestVertexOffsetRight) {
          closestVertices.push({
            vertex: closestVertexOffsetRight,
            angle: angle - 1e-4
          });
        }
      }
      closestVertices.sort(LightRuntimeObjectPixiRenderer2._verticesWithAngleComparator);
      const filteredVerticesResult = [closestVertices[0].vertex];
      const closestVerticesCount = closestVertices.length;
      for (let i = 1; i < closestVerticesCount; i++) {
        if (closestVertices[i].angle !== closestVertices[i - 1].angle) {
          filteredVerticesResult.push(closestVertices[i].vertex);
        }
      }
      return filteredVerticesResult;
    }
  };
  let LightRuntimeObjectPixiRenderer = LightRuntimeObjectPixiRenderer2;
  LightRuntimeObjectPixiRenderer._defaultIndexBuffer = new Uint16Array([0, 1, 2, 0, 2, 3]);
  LightRuntimeObjectPixiRenderer.defaultVertexShader = `
  precision highp float;
  attribute vec2 aVertexPosition;

  uniform mat3 translationMatrix;
  uniform mat3 projectionMatrix;
  varying vec2 vPos;

  void main() {
      vPos = aVertexPosition;
      gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
  }`;
  LightRuntimeObjectPixiRenderer.defaultFragmentShader = `
  precision highp float;
  uniform vec2 center;
  uniform float radius;
  uniform vec3 color;
  varying vec2 vPos;

  void main() {
      float l = length(vPos - center);
      float intensity = 0.0;
      if(l < radius)
        intensity = clamp((radius - l)*(radius - l)/(radius*radius), 0.0, 1.0);
      gl_FragColor = vec4(color*intensity, 1.0);
  }`;
  LightRuntimeObjectPixiRenderer.texturedFragmentShader = `
  precision highp float;
  uniform vec2 center;
  uniform float radius;
  uniform vec3 color;
  uniform sampler2D uSampler;
  varying vec2 vPos;

  void main() {
      vec2 topleft = vec2(center.x - radius, center.y - radius);
      vec2 texCoord = (vPos - topleft)/(2.0 * radius);
      gl_FragColor = vec4(color, 1.0) * texture2D(uSampler, texCoord);
  }`;
  gdjs2.LightRuntimeObjectPixiRenderer = LightRuntimeObjectPixiRenderer;
  gdjs2.LightRuntimeObjectRenderer = LightRuntimeObjectPixiRenderer;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=lightruntimeobject-pixi-renderer.js.map
