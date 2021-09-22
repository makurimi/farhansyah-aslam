gdjs.hoverCode = {};
gdjs.hoverCode.GDlogoObjects1= [];
gdjs.hoverCode.GDlogoObjects2= [];

gdjs.hoverCode.conditionTrue_0 = {val:false};
gdjs.hoverCode.condition0IsTrue_0 = {val:false};
gdjs.hoverCode.condition1IsTrue_0 = {val:false};


gdjs.hoverCode.eventsList0 = function(runtimeScene) {

{


gdjs.hoverCode.condition0IsTrue_0.val = false;
{
gdjs.hoverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.hoverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("logo"), gdjs.hoverCode.GDlogoObjects1);
{for(var i = 0, len = gdjs.hoverCode.GDlogoObjects1.length ;i < len;++i) {
    gdjs.hoverCode.GDlogoObjects1[i].setOpacity(0);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("logo"), gdjs.hoverCode.GDlogoObjects1);
{for(var i = 0, len = gdjs.hoverCode.GDlogoObjects1.length ;i < len;++i) {
    gdjs.hoverCode.GDlogoObjects1[i].setOpacity(gdjs.hoverCode.GDlogoObjects1[i].getOpacity() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 75));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("logo"), gdjs.hoverCode.GDlogoObjects1);

gdjs.hoverCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.hoverCode.GDlogoObjects1.length;i<l;++i) {
    if ( gdjs.hoverCode.GDlogoObjects1[i].getOpacity() >= 250 ) {
        gdjs.hoverCode.condition0IsTrue_0.val = true;
        gdjs.hoverCode.GDlogoObjects1[k] = gdjs.hoverCode.GDlogoObjects1[i];
        ++k;
    }
}
gdjs.hoverCode.GDlogoObjects1.length = k;}if (gdjs.hoverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "tutorial", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("logo"), gdjs.hoverCode.GDlogoObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.hoverCode.GDlogoObjects1.length !== 0 ? gdjs.hoverCode.GDlogoObjects1[0] : null), true, "", 0);
}}

}


};

gdjs.hoverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.hoverCode.GDlogoObjects1.length = 0;
gdjs.hoverCode.GDlogoObjects2.length = 0;

gdjs.hoverCode.eventsList0(runtimeScene);
return;

}

gdjs['hoverCode'] = gdjs.hoverCode;
