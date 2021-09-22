var gdjs;
(function(gdjs2) {
  class LightRuntimeObject extends gdjs2.RuntimeObject {
    constructor(runtimeScene, lightObjectData) {
      super(runtimeScene, lightObjectData);
      this._radius = lightObjectData.content.radius > 0 ? lightObjectData.content.radius : 1;
      this._color = gdjs2.rgbOrHexToRGBColor(lightObjectData.content.color);
      this._debugMode = lightObjectData.content.debugMode;
      this._texture = lightObjectData.content.texture;
      this._obstaclesManager = gdjs2.LightObstaclesManager.getManager(runtimeScene);
      this._renderer = new gdjs2.LightRuntimeObjectRenderer(this, runtimeScene);
      this._runtimeScene = runtimeScene;
      this.onCreated();
    }
    static hexToRGBColor(hex) {
      const hexNumber = parseInt(hex.replace("#", ""), 16);
      return [hexNumber >> 16 & 255, hexNumber >> 8 & 255, hexNumber & 255];
    }
    getRendererObject() {
      return this._renderer.getRendererObject();
    }
    updateFromObjectData(oldObjectData, newObjectData) {
      if (oldObjectData.content.radius !== newObjectData.content.radius) {
        this.setRadius(newObjectData.content.radius);
      }
      if (oldObjectData.content.color !== newObjectData.content.color) {
        this._color = gdjs2.rgbOrHexToRGBColor(newObjectData.content.color);
        this._renderer.updateColor();
      }
      if (oldObjectData.content.texture !== newObjectData.content.texture) {
        this._texture = newObjectData.content.texture;
        this._renderer.updateMesh();
      }
      if (oldObjectData.content.debugMode !== newObjectData.content.debugMode) {
        this._debugMode = newObjectData.content.debugMode;
        this._renderer.updateDebugMode();
      }
      return true;
    }
    updatePreRender() {
      this._renderer.ensureUpToDate();
    }
    getRadius() {
      return this._radius;
    }
    setRadius(radius) {
      this._radius = radius > 0 ? radius : 1;
      this._renderer.updateRadius();
    }
    getHeight() {
      return 2 * this._radius;
    }
    getWidth() {
      return 2 * this._radius;
    }
    getDrawableX() {
      return this.x - this._radius;
    }
    getDrawableY() {
      return this.y - this._radius;
    }
    getColor() {
      return this._color[0] + ";" + this._color[1] + ";" + this._color[2];
    }
    setColor(color) {
      this._color = gdjs2.rgbOrHexToRGBColor(color);
      this._renderer.updateColor();
    }
    getObstaclesManager() {
      return this._obstaclesManager;
    }
    getDebugMode() {
      return this._debugMode;
    }
    getTexture() {
      return this._texture;
    }
  }
  gdjs2.LightRuntimeObject = LightRuntimeObject;
  gdjs2.registerObject("Lighting::LightObject", gdjs2.LightRuntimeObject);
})(gdjs || (gdjs = {}));
//# sourceMappingURL=lightruntimeobject.js.map
