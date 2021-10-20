var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


  var wall1 = createSprite(238,80,250,3); 
  var wall2 = createSprite(222,160,250,3);
  var wall3 = createSprite(67,152,3,40);
  var wall4 = createSprite(90,130,50,3);
  var wall5 = createSprite(365,143,3,130);
  var wall6 = createSprite(345,175,3,30);
  var wall7 = createSprite(41,170,50,3);
  var wall8 = createSprite(57,210,80,3);
  var wall9 = createSprite(247,189,200,3);
  var wall10 = createSprite(352,210,30,3);
  var wall11 = createSprite(18,190,3,40);
  var wall12 = createSprite(339,245,3,70);
  var wall13 = createSprite(98,186,3,50);
  var wall14 = createSprite(115,105,3,50);
  var wall15= createSprite(214,280,252,3);
  var wall16= createSprite(148,213,3,50);
  var wall17 = createSprite(118,237,63,3);
  var wall18= createSprite(88,260,3,46);
  
  
   var ding = createSprite(40,190,12,12);
  ding.shapeColor = "blue";
  
   var dong1 = createSprite(150,87,10,10);
  dong1.shapeColor = "red";
  var dong2 = createSprite(191,153,10,10);
  dong2.shapeColor = "red";
  var dong3 = createSprite(240,87,10,10);
  dong3.shapeColor = "red";
  var dong4 = createSprite(280,153,10,10);
  dong4.shapeColor = "red";
  var dong5 = createSprite(320,87,10,10);
  dong5.shapeColor = "red";
  
   var dong6 = createSprite(310,197,10,10);
  dong6.shapeColor = "red";
  var dong7 = createSprite(270,275,10,10);
  dong7.shapeColor = "red";
  var dong8 = createSprite(230,197,10,10);
  dong8.shapeColor = "red";
  var dong9 = createSprite(190,275,10,10);
  dong9.shapeColor = "red";
  
  var count = 0;
  
  dong1.velocityY=+8;
  dong2.velocityY=-8;
  dong3.velocityY=+8;
  dong4.velocityY=-8;
  dong5.velocityY=+8;
  dong6.velocityY=+8;
  dong7.velocityY=-8;
  dong8.velocityY=+8;
  dong9.velocityY=-8;
  
playSound("assets/category_background/progression.mp3",true);

  function draw (){
    
      background("white");
  text("Deaths: " + count,250,50);
  strokeWeight(0);
  fill("lightgreen");
  rect(18,170,52,40);
  rect(90,240,52,40);
  
createEdgeSprites();
  dong1.bounceOff(wall1);
    dong1.bounceOff(wall2);
    dong2.bounceOff(wall1);
    dong2.bounceOff(wall2);
   dong3.bounceOff(wall1);
  dong3.bounceOff(wall2);
   dong4.bounceOff(wall1);
   dong4.bounceOff(wall2); 
   dong5.bounceOff(wall1);
    dong5.bounceOff(wall2);
    
    dong6.bounceOff(wall9);
    dong6.bounceOff(wall15);
   dong7.bounceOff(wall9);
  dong7.bounceOff(wall15);
   dong8.bounceOff(wall9);
   dong8.bounceOff(wall15);
  dong9.bounceOff(wall9);
   dong9.bounceOff(wall15);
   
   
   if (keyDown("up")) {
     ding.y=ding.y-3;
   }
   if (keyDown("down")) {
    ding.y=ding.y+3; 
   }
    if (keyDown("right")) {
    ding.x=ding.x+3;  
    }
    if (keyDown("left")) {
    ding.x=ding.x-3;  
    }
   
  //Condition to check if ding collides with dongs
    //If tru reset the position of ding
    //Increase number of count
     if (ding.isTouching(dong1)||ding.isTouching(dong2)||ding.isTouching(dong3)||ding.isTouching(dong4)||ding.isTouching(dong5)||ding.isTouching(dong6)) {
     ding.x=40;
     ding.y=190;
     count=count+1;
    }
   if (ding.isTouching(dong7)||ding.isTouching(dong8)||ding.isTouching(dong9)){
     ding.x=40;
     ding.y=190;
     count=count+1;
    } 
    if (ding.isTouching(wall1)||ding.isTouching(wall2)||ding.isTouching(wall3)||ding.isTouching(wall4)||ding.isTouching(wall5)||ding.isTouching(wall6)||ding.isTouching(wall7)||ding.isTouching(wall8)||ding.isTouching(wall9)||ding.isTouching(wall10)||ding.isTouching(wall11)||ding.isTouching(wall12)||ding.isTouching(wall13)||ding.isTouching(wall14)||ding.isTouching(wall15)||ding.isTouching(wall16)||ding.isTouching(wall17)||ding.isTouching(wall18 )) {
      ding.x=40;
     ding.y=190;
     count=count+1;
    }
    

   
   
   
   
   
   
   
   
  drawSprites();  
    
  }
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
