var gdjs;
(function(gdjs2) {
  class LightObstaclesManager {
    constructor(runtimeScene) {
      this._obstacleRBush = new rbush(9, [
        ".owner.getAABB().min[0]",
        ".owner.getAABB().min[1]",
        ".owner.getAABB().max[0]",
        ".owner.getAABB().max[1]"
      ]);
    }
    static getManager(runtimeScene) {
      if (!runtimeScene._lightObstaclesManager) {
        runtimeScene._lightObstaclesManager = new gdjs2.LightObstaclesManager(runtimeScene);
      }
      return runtimeScene._lightObstaclesManager;
    }
    addObstacle(obstacle) {
      this._obstacleRBush.insert(obstacle);
    }
    removeObstacle(obstacle) {
      this._obstacleRBush.remove(obstacle);
    }
    getAllObstaclesAround(object, radius, result) {
      const x = object.getX();
      const y = object.getY();
      const searchArea = gdjs2.staticObject(LightObstaclesManager.prototype.getAllObstaclesAround);
      searchArea.minX = x - radius;
      searchArea.minY = y - radius;
      searchArea.maxX = x + radius;
      searchArea.maxY = y + radius;
      const nearbyObstacles = this._obstacleRBush.search(searchArea);
      result.length = 0;
      result.push.apply(result, nearbyObstacles);
    }
  }
  gdjs2.LightObstaclesManager = LightObstaclesManager;
  class LightObstacleRuntimeBehavior extends gdjs2.RuntimeBehavior {
    constructor(runtimeScene, behaviorData, owner) {
      super(runtimeScene, behaviorData, owner);
      this._oldX = 0;
      this._oldY = 0;
      this._oldWidth = 0;
      this._oldHeight = 0;
      this._registeredInManager = false;
      this._manager = LightObstaclesManager.getManager(runtimeScene);
    }
    doStepPreEvents(runtimeScene) {
      if (!this.activated() && this._registeredInManager) {
        this._manager.removeObstacle(this);
        this._registeredInManager = false;
      } else {
        if (this.activated() && !this._registeredInManager) {
          this._manager.addObstacle(this);
          this._registeredInManager = true;
        }
      }
      if (this._oldX !== this.owner.getX() || this._oldY !== this.owner.getY() || this._oldWidth !== this.owner.getWidth() || this._oldHeight !== this.owner.getHeight()) {
        if (this._registeredInManager) {
          this._manager.removeObstacle(this);
          this._manager.addObstacle(this);
        }
        this._oldX = this.owner.getX();
        this._oldY = this.owner.getY();
        this._oldWidth = this.owner.getWidth();
        this._oldHeight = this.owner.getHeight();
      }
    }
    onDestroy() {
      if (this._manager && this._registeredInManager) {
        this._manager.removeObstacle(this);
      }
    }
    onActivate() {
      if (this._registeredInManager) {
        return;
      }
      this._manager.addObstacle(this);
      this._registeredInManager = true;
    }
    onDeActivate() {
      if (!this._registeredInManager) {
        return;
      }
      this._manager.removeObstacle(this);
      this._registeredInManager = false;
    }
  }
  gdjs2.LightObstacleRuntimeBehavior = LightObstacleRuntimeBehavior;
  gdjs2.registerBehavior("Lighting::LightObstacleBehavior", gdjs2.LightObstacleRuntimeBehavior);
})(gdjs || (gdjs = {}));
//# sourceMappingURL=lightobstacleruntimebehavior.js.map
