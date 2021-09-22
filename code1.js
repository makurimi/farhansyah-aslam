gdjs.gameplayCode = {};
gdjs.gameplayCode.GDfloor1Objects1= [];
gdjs.gameplayCode.GDfloor1Objects2= [];
gdjs.gameplayCode.GDfloor1Objects3= [];
gdjs.gameplayCode.GDfloor2Objects1= [];
gdjs.gameplayCode.GDfloor2Objects2= [];
gdjs.gameplayCode.GDfloor2Objects3= [];
gdjs.gameplayCode.GDNewObject2Objects1= [];
gdjs.gameplayCode.GDNewObject2Objects2= [];
gdjs.gameplayCode.GDNewObject2Objects3= [];
gdjs.gameplayCode.GDwall_951Objects1= [];
gdjs.gameplayCode.GDwall_951Objects2= [];
gdjs.gameplayCode.GDwall_951Objects3= [];
gdjs.gameplayCode.GDwall_952Objects1= [];
gdjs.gameplayCode.GDwall_952Objects2= [];
gdjs.gameplayCode.GDwall_952Objects3= [];
gdjs.gameplayCode.GDPlayer_95RedObjects1= [];
gdjs.gameplayCode.GDPlayer_95RedObjects2= [];
gdjs.gameplayCode.GDPlayer_95RedObjects3= [];
gdjs.gameplayCode.GDfarhanObjects1= [];
gdjs.gameplayCode.GDfarhanObjects2= [];
gdjs.gameplayCode.GDfarhanObjects3= [];
gdjs.gameplayCode.GDnotifyObjects1= [];
gdjs.gameplayCode.GDnotifyObjects2= [];
gdjs.gameplayCode.GDnotifyObjects3= [];
gdjs.gameplayCode.GDroad_95signObjects1= [];
gdjs.gameplayCode.GDroad_95signObjects2= [];
gdjs.gameplayCode.GDroad_95signObjects3= [];
gdjs.gameplayCode.GDnotify_95signObjects1= [];
gdjs.gameplayCode.GDnotify_95signObjects2= [];
gdjs.gameplayCode.GDnotify_95signObjects3= [];
gdjs.gameplayCode.GDdoorObjects1= [];
gdjs.gameplayCode.GDdoorObjects2= [];
gdjs.gameplayCode.GDdoorObjects3= [];
gdjs.gameplayCode.GDNewObjectObjects1= [];
gdjs.gameplayCode.GDNewObjectObjects2= [];
gdjs.gameplayCode.GDNewObjectObjects3= [];
gdjs.gameplayCode.GDopen2Objects1= [];
gdjs.gameplayCode.GDopen2Objects2= [];
gdjs.gameplayCode.GDopen2Objects3= [];
gdjs.gameplayCode.GDopenObjects1= [];
gdjs.gameplayCode.GDopenObjects2= [];
gdjs.gameplayCode.GDopenObjects3= [];
gdjs.gameplayCode.GDelevatorObjects1= [];
gdjs.gameplayCode.GDelevatorObjects2= [];
gdjs.gameplayCode.GDelevatorObjects3= [];
gdjs.gameplayCode.GDspawn_95skillObjects1= [];
gdjs.gameplayCode.GDspawn_95skillObjects2= [];
gdjs.gameplayCode.GDspawn_95skillObjects3= [];

gdjs.gameplayCode.conditionTrue_0 = {val:false};
gdjs.gameplayCode.condition0IsTrue_0 = {val:false};
gdjs.gameplayCode.condition1IsTrue_0 = {val:false};
gdjs.gameplayCode.condition2IsTrue_0 = {val:false};
gdjs.gameplayCode.conditionTrue_1 = {val:false};
gdjs.gameplayCode.condition0IsTrue_1 = {val:false};
gdjs.gameplayCode.condition1IsTrue_1 = {val:false};
gdjs.gameplayCode.condition2IsTrue_1 = {val:false};


gdjs.gameplayCode.mapOfGDgdjs_46gameplayCode_46GDwall_95951Objects1Objects = Hashtable.newFrom({"wall_1": gdjs.gameplayCode.GDwall_951Objects1});gdjs.gameplayCode.mapOfGDgdjs_46gameplayCode_46GDfarhanObjects1Objects = Hashtable.newFrom({"farhan": gdjs.gameplayCode.GDfarhanObjects1});gdjs.gameplayCode.mapOfGDgdjs_46gameplayCode_46GDfarhanObjects1Objects = Hashtable.newFrom({"farhan": gdjs.gameplayCode.GDfarhanObjects1});gdjs.gameplayCode.mapOfGDgdjs_46gameplayCode_46GDwall_95952Objects1Objects = Hashtable.newFrom({"wall_2": gdjs.gameplayCode.GDwall_952Objects1});gdjs.gameplayCode.mapOfGDgdjs_46gameplayCode_46GDPlayer_9595RedObjects1Objects = Hashtable.newFrom({"Player_Red": gdjs.gameplayCode.GDPlayer_95RedObjects1});gdjs.gameplayCode.mapOfGDgdjs_46gameplayCode_46GDfarhanObjects1Objects = Hashtable.newFrom({"farhan": gdjs.gameplayCode.GDfarhanObjects1});gdjs.gameplayCode.eventsList0 = function(runtimeScene) {

{


gdjs.gameplayCode.condition0IsTrue_0.val = false;
gdjs.gameplayCode.condition1IsTrue_0.val = false;
{
gdjs.gameplayCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.gameplayCode.condition0IsTrue_0.val ) {
{
{gdjs.gameplayCode.conditionTrue_1 = gdjs.gameplayCode.condition1IsTrue_0;
gdjs.gameplayCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9457060);
}
}}
if (gdjs.gameplayCode.condition1IsTrue_0.val) {
/* Reuse gdjs.gameplayCode.GDnotifyObjects1 */
{for(var i = 0, len = gdjs.gameplayCode.GDnotifyObjects1.length ;i < len;++i) {
    gdjs.gameplayCode.GDnotifyObjects1[i].setAnimation(gdjs.gameplayCode.GDnotifyObjects1[i].getAnimation() + (1));
}
}}

}


};gdjs.gameplayCode.mapOfGDgdjs_46gameplayCode_46GDPlayer_9595RedObjects1Objects = Hashtable.newFrom({"Player_Red": gdjs.gameplayCode.GDPlayer_95RedObjects1});gdjs.gameplayCode.mapOfGDgdjs_46gameplayCode_46GDfarhanObjects1Objects = Hashtable.newFrom({"farhan": gdjs.gameplayCode.GDfarhanObjects1});gdjs.gameplayCode.mapOfGDgdjs_46gameplayCode_46GDPlayer_9595RedObjects1Objects = Hashtable.newFrom({"Player_Red": gdjs.gameplayCode.GDPlayer_95RedObjects1});gdjs.gameplayCode.mapOfGDgdjs_46gameplayCode_46GDroad_9595signObjects1Objects = Hashtable.newFrom({"road_sign": gdjs.gameplayCode.GDroad_95signObjects1});gdjs.gameplayCode.eventsList1 = function(runtimeScene) {

{


gdjs.gameplayCode.condition0IsTrue_0.val = false;
gdjs.gameplayCode.condition1IsTrue_0.val = false;
{
gdjs.gameplayCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.gameplayCode.condition0IsTrue_0.val ) {
{
{gdjs.gameplayCode.conditionTrue_1 = gdjs.gameplayCode.condition1IsTrue_0;
gdjs.gameplayCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9459340);
}
}}
if (gdjs.gameplayCode.condition1IsTrue_0.val) {
/* Reuse gdjs.gameplayCode.GDnotify_95signObjects1 */
{for(var i = 0, len = gdjs.gameplayCode.GDnotify_95signObjects1.length ;i < len;++i) {
    gdjs.gameplayCode.GDnotify_95signObjects1[i].setAnimation(gdjs.gameplayCode.GDnotify_95signObjects1[i].getAnimation() + (1));
}
}}

}


};gdjs.gameplayCode.mapOfGDgdjs_46gameplayCode_46GDPlayer_9595RedObjects1Objects = Hashtable.newFrom({"Player_Red": gdjs.gameplayCode.GDPlayer_95RedObjects1});gdjs.gameplayCode.mapOfGDgdjs_46gameplayCode_46GDroad_9595signObjects1Objects = Hashtable.newFrom({"road_sign": gdjs.gameplayCode.GDroad_95signObjects1});gdjs.gameplayCode.mapOfGDgdjs_46gameplayCode_46GDPlayer_9595RedObjects1Objects = Hashtable.newFrom({"Player_Red": gdjs.gameplayCode.GDPlayer_95RedObjects1});gdjs.gameplayCode.mapOfGDgdjs_46gameplayCode_46GDdoorObjects1Objects = Hashtable.newFrom({"door": gdjs.gameplayCode.GDdoorObjects1});gdjs.gameplayCode.eventsList2 = function(runtimeScene) {

{


gdjs.gameplayCode.condition0IsTrue_0.val = false;
gdjs.gameplayCode.condition1IsTrue_0.val = false;
{
gdjs.gameplayCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.gameplayCode.condition0IsTrue_0.val ) {
{
{gdjs.gameplayCode.conditionTrue_1 = gdjs.gameplayCode.condition1IsTrue_0;
gdjs.gameplayCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9461652);
}
}}
if (gdjs.gameplayCode.condition1IsTrue_0.val) {
}

}


{


gdjs.gameplayCode.condition0IsTrue_0.val = false;
{
gdjs.gameplayCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if (gdjs.gameplayCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "skill", false);
}}

}


};gdjs.gameplayCode.mapOfGDgdjs_46gameplayCode_46GDPlayer_9595RedObjects1Objects = Hashtable.newFrom({"Player_Red": gdjs.gameplayCode.GDPlayer_95RedObjects1});gdjs.gameplayCode.mapOfGDgdjs_46gameplayCode_46GDdoorObjects1Objects = Hashtable.newFrom({"door": gdjs.gameplayCode.GDdoorObjects1});gdjs.gameplayCode.mapOfGDgdjs_46gameplayCode_46GDPlayer_9595RedObjects1Objects = Hashtable.newFrom({"Player_Red": gdjs.gameplayCode.GDPlayer_95RedObjects1});gdjs.gameplayCode.mapOfGDgdjs_46gameplayCode_46GDelevatorObjects1Objects = Hashtable.newFrom({"elevator": gdjs.gameplayCode.GDelevatorObjects1});gdjs.gameplayCode.eventsList3 = function(runtimeScene) {

{


gdjs.gameplayCode.condition0IsTrue_0.val = false;
gdjs.gameplayCode.condition1IsTrue_0.val = false;
{
gdjs.gameplayCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.gameplayCode.condition0IsTrue_0.val ) {
{
{gdjs.gameplayCode.conditionTrue_1 = gdjs.gameplayCode.condition1IsTrue_0;
gdjs.gameplayCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9464932);
}
}}
if (gdjs.gameplayCode.condition1IsTrue_0.val) {
}

}


{


gdjs.gameplayCode.condition0IsTrue_0.val = false;
{
gdjs.gameplayCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if (gdjs.gameplayCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "", false);
}}

}


};gdjs.gameplayCode.mapOfGDgdjs_46gameplayCode_46GDPlayer_9595RedObjects1Objects = Hashtable.newFrom({"Player_Red": gdjs.gameplayCode.GDPlayer_95RedObjects1});gdjs.gameplayCode.mapOfGDgdjs_46gameplayCode_46GDelevatorObjects1Objects = Hashtable.newFrom({"elevator": gdjs.gameplayCode.GDelevatorObjects1});gdjs.gameplayCode.eventsList4 = function(runtimeScene) {

{



}


{


{
}

}


{



}


{


gdjs.gameplayCode.condition0IsTrue_0.val = false;
{
gdjs.gameplayCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.gameplayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player_Red"), gdjs.gameplayCode.GDPlayer_95RedObjects1);
{for(var i = 0, len = gdjs.gameplayCode.GDPlayer_95RedObjects1.length ;i < len;++i) {
    gdjs.gameplayCode.GDPlayer_95RedObjects1[i].setAnimationName("belakang");
}
}{for(var i = 0, len = gdjs.gameplayCode.GDPlayer_95RedObjects1.length ;i < len;++i) {
    gdjs.gameplayCode.GDPlayer_95RedObjects1[i].addForce(0, -(300), 0);
}
}}

}


{


gdjs.gameplayCode.condition0IsTrue_0.val = false;
{
gdjs.gameplayCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.gameplayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player_Red"), gdjs.gameplayCode.GDPlayer_95RedObjects1);
{for(var i = 0, len = gdjs.gameplayCode.GDPlayer_95RedObjects1.length ;i < len;++i) {
    gdjs.gameplayCode.GDPlayer_95RedObjects1[i].setAnimationName("samping");
}
}{for(var i = 0, len = gdjs.gameplayCode.GDPlayer_95RedObjects1.length ;i < len;++i) {
    gdjs.gameplayCode.GDPlayer_95RedObjects1[i].addForce(-(300), 0, 0);
}
}{for(var i = 0, len = gdjs.gameplayCode.GDPlayer_95RedObjects1.length ;i < len;++i) {
    gdjs.gameplayCode.GDPlayer_95RedObjects1[i].flipX(true);
}
}}

}


{


gdjs.gameplayCode.condition0IsTrue_0.val = false;
{
gdjs.gameplayCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.gameplayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player_Red"), gdjs.gameplayCode.GDPlayer_95RedObjects1);
{for(var i = 0, len = gdjs.gameplayCode.GDPlayer_95RedObjects1.length ;i < len;++i) {
    gdjs.gameplayCode.GDPlayer_95RedObjects1[i].setAnimationName("depan");
}
}{for(var i = 0, len = gdjs.gameplayCode.GDPlayer_95RedObjects1.length ;i < len;++i) {
    gdjs.gameplayCode.GDPlayer_95RedObjects1[i].addForce(0, 300, 0);
}
}}

}


{


gdjs.gameplayCode.condition0IsTrue_0.val = false;
{
gdjs.gameplayCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.gameplayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player_Red"), gdjs.gameplayCode.GDPlayer_95RedObjects1);
{for(var i = 0, len = gdjs.gameplayCode.GDPlayer_95RedObjects1.length ;i < len;++i) {
    gdjs.gameplayCode.GDPlayer_95RedObjects1[i].setAnimationName("samping");
}
}{for(var i = 0, len = gdjs.gameplayCode.GDPlayer_95RedObjects1.length ;i < len;++i) {
    gdjs.gameplayCode.GDPlayer_95RedObjects1[i].addForce(300, 0, 0);
}
}{for(var i = 0, len = gdjs.gameplayCode.GDPlayer_95RedObjects1.length ;i < len;++i) {
    gdjs.gameplayCode.GDPlayer_95RedObjects1[i].flipX(false);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player_Red"), gdjs.gameplayCode.GDPlayer_95RedObjects1);
gdjs.copyArray(runtimeScene.getObjects("farhan"), gdjs.gameplayCode.GDfarhanObjects1);
gdjs.copyArray(runtimeScene.getObjects("wall_1"), gdjs.gameplayCode.GDwall_951Objects1);
gdjs.copyArray(runtimeScene.getObjects("wall_2"), gdjs.gameplayCode.GDwall_952Objects1);
{for(var i = 0, len = gdjs.gameplayCode.GDPlayer_95RedObjects1.length ;i < len;++i) {
    gdjs.gameplayCode.GDPlayer_95RedObjects1[i].separateFromObjectsList(gdjs.gameplayCode.mapOfGDgdjs_46gameplayCode_46GDwall_95951Objects1Objects, false);
}
}{for(var i = 0, len = gdjs.gameplayCode.GDPlayer_95RedObjects1.length ;i < len;++i) {
    gdjs.gameplayCode.GDPlayer_95RedObjects1[i].separateFromObjectsList(gdjs.gameplayCode.mapOfGDgdjs_46gameplayCode_46GDfarhanObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.gameplayCode.GDPlayer_95RedObjects1.length ;i < len;++i) {
    gdjs.gameplayCode.GDPlayer_95RedObjects1[i].separateFromObjectsList(gdjs.gameplayCode.mapOfGDgdjs_46gameplayCode_46GDfarhanObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.gameplayCode.GDPlayer_95RedObjects1.length ;i < len;++i) {
    gdjs.gameplayCode.GDPlayer_95RedObjects1[i].separateFromObjectsList(gdjs.gameplayCode.mapOfGDgdjs_46gameplayCode_46GDwall_95952Objects1Objects, false);
}
}}

}


{


gdjs.gameplayCode.condition0IsTrue_0.val = false;
{
gdjs.gameplayCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
}if (gdjs.gameplayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player_Red"), gdjs.gameplayCode.GDPlayer_95RedObjects1);
{for(var i = 0, len = gdjs.gameplayCode.GDPlayer_95RedObjects1.length ;i < len;++i) {
    gdjs.gameplayCode.GDPlayer_95RedObjects1[i].setAnimationName("idle");
}
}}

}


{


gdjs.gameplayCode.condition0IsTrue_0.val = false;
{
gdjs.gameplayCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "s");
}if (gdjs.gameplayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player_Red"), gdjs.gameplayCode.GDPlayer_95RedObjects1);
{for(var i = 0, len = gdjs.gameplayCode.GDPlayer_95RedObjects1.length ;i < len;++i) {
    gdjs.gameplayCode.GDPlayer_95RedObjects1[i].setAnimationName("idle");
}
}}

}


{


gdjs.gameplayCode.condition0IsTrue_0.val = false;
{
gdjs.gameplayCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
}if (gdjs.gameplayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player_Red"), gdjs.gameplayCode.GDPlayer_95RedObjects1);
{for(var i = 0, len = gdjs.gameplayCode.GDPlayer_95RedObjects1.length ;i < len;++i) {
    gdjs.gameplayCode.GDPlayer_95RedObjects1[i].setAnimationName("idle");
}
}}

}


{


gdjs.gameplayCode.condition0IsTrue_0.val = false;
{
gdjs.gameplayCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "w");
}if (gdjs.gameplayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player_Red"), gdjs.gameplayCode.GDPlayer_95RedObjects1);
{for(var i = 0, len = gdjs.gameplayCode.GDPlayer_95RedObjects1.length ;i < len;++i) {
    gdjs.gameplayCode.GDPlayer_95RedObjects1[i].setAnimationName("idle");
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player_Red"), gdjs.gameplayCode.GDPlayer_95RedObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.gameplayCode.GDPlayer_95RedObjects1.length !== 0 ? gdjs.gameplayCode.GDPlayer_95RedObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player_Red"), gdjs.gameplayCode.GDPlayer_95RedObjects1);
gdjs.copyArray(runtimeScene.getObjects("farhan"), gdjs.gameplayCode.GDfarhanObjects1);

gdjs.gameplayCode.condition0IsTrue_0.val = false;
{
gdjs.gameplayCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.gameplayCode.mapOfGDgdjs_46gameplayCode_46GDPlayer_9595RedObjects1Objects, gdjs.gameplayCode.mapOfGDgdjs_46gameplayCode_46GDfarhanObjects1Objects, 200, false);
}if (gdjs.gameplayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("notify"), gdjs.gameplayCode.GDnotifyObjects1);
{for(var i = 0, len = gdjs.gameplayCode.GDnotifyObjects1.length ;i < len;++i) {
    gdjs.gameplayCode.GDnotifyObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.gameplayCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player_Red"), gdjs.gameplayCode.GDPlayer_95RedObjects1);
gdjs.copyArray(runtimeScene.getObjects("farhan"), gdjs.gameplayCode.GDfarhanObjects1);

gdjs.gameplayCode.condition0IsTrue_0.val = false;
{
gdjs.gameplayCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.gameplayCode.mapOfGDgdjs_46gameplayCode_46GDPlayer_9595RedObjects1Objects, gdjs.gameplayCode.mapOfGDgdjs_46gameplayCode_46GDfarhanObjects1Objects, 200, true);
}if (gdjs.gameplayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("notify"), gdjs.gameplayCode.GDnotifyObjects1);
{for(var i = 0, len = gdjs.gameplayCode.GDnotifyObjects1.length ;i < len;++i) {
    gdjs.gameplayCode.GDnotifyObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.gameplayCode.GDnotifyObjects1.length ;i < len;++i) {
    gdjs.gameplayCode.GDnotifyObjects1[i].setAnimationName("idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player_Red"), gdjs.gameplayCode.GDPlayer_95RedObjects1);
gdjs.copyArray(runtimeScene.getObjects("road_sign"), gdjs.gameplayCode.GDroad_95signObjects1);

gdjs.gameplayCode.condition0IsTrue_0.val = false;
{
gdjs.gameplayCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.gameplayCode.mapOfGDgdjs_46gameplayCode_46GDPlayer_9595RedObjects1Objects, gdjs.gameplayCode.mapOfGDgdjs_46gameplayCode_46GDroad_9595signObjects1Objects, 150, false);
}if (gdjs.gameplayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("notify_sign"), gdjs.gameplayCode.GDnotify_95signObjects1);
{for(var i = 0, len = gdjs.gameplayCode.GDnotify_95signObjects1.length ;i < len;++i) {
    gdjs.gameplayCode.GDnotify_95signObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.gameplayCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player_Red"), gdjs.gameplayCode.GDPlayer_95RedObjects1);
gdjs.copyArray(runtimeScene.getObjects("road_sign"), gdjs.gameplayCode.GDroad_95signObjects1);

gdjs.gameplayCode.condition0IsTrue_0.val = false;
{
gdjs.gameplayCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.gameplayCode.mapOfGDgdjs_46gameplayCode_46GDPlayer_9595RedObjects1Objects, gdjs.gameplayCode.mapOfGDgdjs_46gameplayCode_46GDroad_9595signObjects1Objects, 150, true);
}if (gdjs.gameplayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("notify_sign"), gdjs.gameplayCode.GDnotify_95signObjects1);
{for(var i = 0, len = gdjs.gameplayCode.GDnotify_95signObjects1.length ;i < len;++i) {
    gdjs.gameplayCode.GDnotify_95signObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.gameplayCode.GDnotify_95signObjects1.length ;i < len;++i) {
    gdjs.gameplayCode.GDnotify_95signObjects1[i].setAnimationName("idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player_Red"), gdjs.gameplayCode.GDPlayer_95RedObjects1);
gdjs.copyArray(runtimeScene.getObjects("door"), gdjs.gameplayCode.GDdoorObjects1);

gdjs.gameplayCode.condition0IsTrue_0.val = false;
{
gdjs.gameplayCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.gameplayCode.mapOfGDgdjs_46gameplayCode_46GDPlayer_9595RedObjects1Objects, gdjs.gameplayCode.mapOfGDgdjs_46gameplayCode_46GDdoorObjects1Objects, 150, false);
}if (gdjs.gameplayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("open"), gdjs.gameplayCode.GDopenObjects1);
{for(var i = 0, len = gdjs.gameplayCode.GDopenObjects1.length ;i < len;++i) {
    gdjs.gameplayCode.GDopenObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.gameplayCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player_Red"), gdjs.gameplayCode.GDPlayer_95RedObjects1);
gdjs.copyArray(runtimeScene.getObjects("door"), gdjs.gameplayCode.GDdoorObjects1);

gdjs.gameplayCode.condition0IsTrue_0.val = false;
{
gdjs.gameplayCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.gameplayCode.mapOfGDgdjs_46gameplayCode_46GDPlayer_9595RedObjects1Objects, gdjs.gameplayCode.mapOfGDgdjs_46gameplayCode_46GDdoorObjects1Objects, 150, true);
}if (gdjs.gameplayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("open"), gdjs.gameplayCode.GDopenObjects1);
{for(var i = 0, len = gdjs.gameplayCode.GDopenObjects1.length ;i < len;++i) {
    gdjs.gameplayCode.GDopenObjects1[i].hide();
}
}}

}


{


gdjs.gameplayCode.condition0IsTrue_0.val = false;
{
gdjs.gameplayCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.gameplayCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Memo - cute, 8 bit, chiptune.mp3", true, 25, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player_Red"), gdjs.gameplayCode.GDPlayer_95RedObjects1);
gdjs.copyArray(runtimeScene.getObjects("elevator"), gdjs.gameplayCode.GDelevatorObjects1);

gdjs.gameplayCode.condition0IsTrue_0.val = false;
{
gdjs.gameplayCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.gameplayCode.mapOfGDgdjs_46gameplayCode_46GDPlayer_9595RedObjects1Objects, gdjs.gameplayCode.mapOfGDgdjs_46gameplayCode_46GDelevatorObjects1Objects, 150, false);
}if (gdjs.gameplayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("open2"), gdjs.gameplayCode.GDopen2Objects1);
{for(var i = 0, len = gdjs.gameplayCode.GDopen2Objects1.length ;i < len;++i) {
    gdjs.gameplayCode.GDopen2Objects1[i].hide(false);
}
}
{ //Subevents
gdjs.gameplayCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player_Red"), gdjs.gameplayCode.GDPlayer_95RedObjects1);
gdjs.copyArray(runtimeScene.getObjects("elevator"), gdjs.gameplayCode.GDelevatorObjects1);

gdjs.gameplayCode.condition0IsTrue_0.val = false;
{
gdjs.gameplayCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.gameplayCode.mapOfGDgdjs_46gameplayCode_46GDPlayer_9595RedObjects1Objects, gdjs.gameplayCode.mapOfGDgdjs_46gameplayCode_46GDelevatorObjects1Objects, 150, true);
}if (gdjs.gameplayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("open2"), gdjs.gameplayCode.GDopen2Objects1);
{for(var i = 0, len = gdjs.gameplayCode.GDopen2Objects1.length ;i < len;++i) {
    gdjs.gameplayCode.GDopen2Objects1[i].hide();
}
}}

}


{


{
}

}


{



}


{


gdjs.gameplayCode.condition0IsTrue_0.val = false;
{
gdjs.gameplayCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.gameplayCode.condition0IsTrue_0.val) {
}

}


{


gdjs.gameplayCode.condition0IsTrue_0.val = false;
{
gdjs.gameplayCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.gameplayCode.condition0IsTrue_0.val) {
}

}


{


gdjs.gameplayCode.condition0IsTrue_0.val = false;
{
gdjs.gameplayCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.gameplayCode.condition0IsTrue_0.val) {
}

}


{


gdjs.gameplayCode.condition0IsTrue_0.val = false;
{
gdjs.gameplayCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.gameplayCode.condition0IsTrue_0.val) {
}

}


{


{
}

}


{


{
}

}


{


{
}

}


};

gdjs.gameplayCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameplayCode.GDfloor1Objects1.length = 0;
gdjs.gameplayCode.GDfloor1Objects2.length = 0;
gdjs.gameplayCode.GDfloor1Objects3.length = 0;
gdjs.gameplayCode.GDfloor2Objects1.length = 0;
gdjs.gameplayCode.GDfloor2Objects2.length = 0;
gdjs.gameplayCode.GDfloor2Objects3.length = 0;
gdjs.gameplayCode.GDNewObject2Objects1.length = 0;
gdjs.gameplayCode.GDNewObject2Objects2.length = 0;
gdjs.gameplayCode.GDNewObject2Objects3.length = 0;
gdjs.gameplayCode.GDwall_951Objects1.length = 0;
gdjs.gameplayCode.GDwall_951Objects2.length = 0;
gdjs.gameplayCode.GDwall_951Objects3.length = 0;
gdjs.gameplayCode.GDwall_952Objects1.length = 0;
gdjs.gameplayCode.GDwall_952Objects2.length = 0;
gdjs.gameplayCode.GDwall_952Objects3.length = 0;
gdjs.gameplayCode.GDPlayer_95RedObjects1.length = 0;
gdjs.gameplayCode.GDPlayer_95RedObjects2.length = 0;
gdjs.gameplayCode.GDPlayer_95RedObjects3.length = 0;
gdjs.gameplayCode.GDfarhanObjects1.length = 0;
gdjs.gameplayCode.GDfarhanObjects2.length = 0;
gdjs.gameplayCode.GDfarhanObjects3.length = 0;
gdjs.gameplayCode.GDnotifyObjects1.length = 0;
gdjs.gameplayCode.GDnotifyObjects2.length = 0;
gdjs.gameplayCode.GDnotifyObjects3.length = 0;
gdjs.gameplayCode.GDroad_95signObjects1.length = 0;
gdjs.gameplayCode.GDroad_95signObjects2.length = 0;
gdjs.gameplayCode.GDroad_95signObjects3.length = 0;
gdjs.gameplayCode.GDnotify_95signObjects1.length = 0;
gdjs.gameplayCode.GDnotify_95signObjects2.length = 0;
gdjs.gameplayCode.GDnotify_95signObjects3.length = 0;
gdjs.gameplayCode.GDdoorObjects1.length = 0;
gdjs.gameplayCode.GDdoorObjects2.length = 0;
gdjs.gameplayCode.GDdoorObjects3.length = 0;
gdjs.gameplayCode.GDNewObjectObjects1.length = 0;
gdjs.gameplayCode.GDNewObjectObjects2.length = 0;
gdjs.gameplayCode.GDNewObjectObjects3.length = 0;
gdjs.gameplayCode.GDopen2Objects1.length = 0;
gdjs.gameplayCode.GDopen2Objects2.length = 0;
gdjs.gameplayCode.GDopen2Objects3.length = 0;
gdjs.gameplayCode.GDopenObjects1.length = 0;
gdjs.gameplayCode.GDopenObjects2.length = 0;
gdjs.gameplayCode.GDopenObjects3.length = 0;
gdjs.gameplayCode.GDelevatorObjects1.length = 0;
gdjs.gameplayCode.GDelevatorObjects2.length = 0;
gdjs.gameplayCode.GDelevatorObjects3.length = 0;
gdjs.gameplayCode.GDspawn_95skillObjects1.length = 0;
gdjs.gameplayCode.GDspawn_95skillObjects2.length = 0;
gdjs.gameplayCode.GDspawn_95skillObjects3.length = 0;

gdjs.gameplayCode.eventsList4(runtimeScene);
return;

}

gdjs['gameplayCode'] = gdjs.gameplayCode;
