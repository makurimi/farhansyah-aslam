gdjs.tutorialCode = {};
gdjs.tutorialCode.GDNewObjectObjects1= [];
gdjs.tutorialCode.GDNewObjectObjects2= [];
gdjs.tutorialCode.GDwasdObjects1= [];
gdjs.tutorialCode.GDwasdObjects2= [];
gdjs.tutorialCode.GDNewObject2Objects1= [];
gdjs.tutorialCode.GDNewObject2Objects2= [];
gdjs.tutorialCode.GDNewObject3Objects1= [];
gdjs.tutorialCode.GDNewObject3Objects2= [];
gdjs.tutorialCode.GDNewObject4Objects1= [];
gdjs.tutorialCode.GDNewObject4Objects2= [];
gdjs.tutorialCode.GDasdObjects1= [];
gdjs.tutorialCode.GDasdObjects2= [];
gdjs.tutorialCode.GDplayerObjects1= [];
gdjs.tutorialCode.GDplayerObjects2= [];
gdjs.tutorialCode.GDNewObject5Objects1= [];
gdjs.tutorialCode.GDNewObject5Objects2= [];
gdjs.tutorialCode.GDfocusObjects1= [];
gdjs.tutorialCode.GDfocusObjects2= [];

gdjs.tutorialCode.conditionTrue_0 = {val:false};
gdjs.tutorialCode.condition0IsTrue_0 = {val:false};
gdjs.tutorialCode.condition1IsTrue_0 = {val:false};
gdjs.tutorialCode.condition2IsTrue_0 = {val:false};
gdjs.tutorialCode.conditionTrue_1 = {val:false};
gdjs.tutorialCode.condition0IsTrue_1 = {val:false};
gdjs.tutorialCode.condition1IsTrue_1 = {val:false};
gdjs.tutorialCode.condition2IsTrue_1 = {val:false};


gdjs.tutorialCode.eventsList0 = function(runtimeScene) {

{


gdjs.tutorialCode.condition0IsTrue_0.val = false;
gdjs.tutorialCode.condition1IsTrue_0.val = false;
{
gdjs.tutorialCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.tutorialCode.condition0IsTrue_0.val ) {
{
{gdjs.tutorialCode.conditionTrue_1 = gdjs.tutorialCode.condition1IsTrue_0;
gdjs.tutorialCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9402212);
}
}}
if (gdjs.tutorialCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gameplay", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("focus"), gdjs.tutorialCode.GDfocusObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.tutorialCode.GDfocusObjects1.length !== 0 ? gdjs.tutorialCode.GDfocusObjects1[0] : null), true, "", 0);
}}

}


};

gdjs.tutorialCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.tutorialCode.GDNewObjectObjects1.length = 0;
gdjs.tutorialCode.GDNewObjectObjects2.length = 0;
gdjs.tutorialCode.GDwasdObjects1.length = 0;
gdjs.tutorialCode.GDwasdObjects2.length = 0;
gdjs.tutorialCode.GDNewObject2Objects1.length = 0;
gdjs.tutorialCode.GDNewObject2Objects2.length = 0;
gdjs.tutorialCode.GDNewObject3Objects1.length = 0;
gdjs.tutorialCode.GDNewObject3Objects2.length = 0;
gdjs.tutorialCode.GDNewObject4Objects1.length = 0;
gdjs.tutorialCode.GDNewObject4Objects2.length = 0;
gdjs.tutorialCode.GDasdObjects1.length = 0;
gdjs.tutorialCode.GDasdObjects2.length = 0;
gdjs.tutorialCode.GDplayerObjects1.length = 0;
gdjs.tutorialCode.GDplayerObjects2.length = 0;
gdjs.tutorialCode.GDNewObject5Objects1.length = 0;
gdjs.tutorialCode.GDNewObject5Objects2.length = 0;
gdjs.tutorialCode.GDfocusObjects1.length = 0;
gdjs.tutorialCode.GDfocusObjects2.length = 0;

gdjs.tutorialCode.eventsList0(runtimeScene);
return;

}

gdjs['tutorialCode'] = gdjs.tutorialCode;
