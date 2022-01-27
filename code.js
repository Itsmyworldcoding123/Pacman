var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["8b726675-f54b-47c1-8cf2-5858254cd055","a5df0ce1-2280-4dc4-a925-0e4ea3c56112","ebca0a39-001c-4105-8995-f695fc90cc5a","161555aa-be77-4777-9fc7-906086f43b95","79b5943d-f92a-4d84-958a-5171d7641d12","53254542-d08d-4ee3-949d-28f3ce1856a2","8b773162-580e-41b1-b3d2-2f67c54327cd","c1d2f319-637d-45cf-9277-c9b8f593b1f7"],"propsByKey":{"8b726675-f54b-47c1-8cf2-5858254cd055":{"name":"gameover.png_1","sourceUrl":null,"frameSize":{"x":187,"y":93},"frameCount":1,"looping":true,"frameDelay":12,"version":"wukHgVXL5R2FpO_dwTRIsv0_5sTCoNTZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":187,"y":93},"rootRelativePath":"assets/8b726675-f54b-47c1-8cf2-5858254cd055.png"},"a5df0ce1-2280-4dc4-a925-0e4ea3c56112":{"name":"Youwin.png_1","sourceUrl":null,"frameSize":{"x":171,"y":123},"frameCount":1,"looping":true,"frameDelay":12,"version":"UDL95yawy5d.mJK5Xo7t_UL24EwCJjJw","loadedFromSource":true,"saved":true,"sourceSize":{"x":171,"y":123},"rootRelativePath":"assets/a5df0ce1-2280-4dc4-a925-0e4ea3c56112.png"},"ebca0a39-001c-4105-8995-f695fc90cc5a":{"name":"ghost","sourceUrl":null,"frameSize":{"x":512,"y":492},"frameCount":1,"looping":true,"frameDelay":12,"version":"Ms6jgPHqgseC0nFYyO6tJ2Y14Z9nDeH_","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":492},"rootRelativePath":"assets/ebca0a39-001c-4105-8995-f695fc90cc5a.png"},"161555aa-be77-4777-9fc7-906086f43b95":{"name":"pacman","sourceUrl":null,"frameSize":{"x":140,"y":140},"frameCount":6,"looping":true,"frameDelay":1,"version":"RbAFcRxrsml5p6LeIkdj0ZUMKFXkJIC3","loadedFromSource":true,"saved":true,"sourceSize":{"x":280,"y":420},"rootRelativePath":"assets/161555aa-be77-4777-9fc7-906086f43b95.png"},"79b5943d-f92a-4d84-958a-5171d7641d12":{"name":"youwin","sourceUrl":null,"frameSize":{"x":454,"y":336},"frameCount":1,"looping":true,"frameDelay":12,"version":"PhNttqoV4bT48QvgTEJb9NNdUEGYc2Uw","loadedFromSource":true,"saved":true,"sourceSize":{"x":454,"y":336},"rootRelativePath":"assets/79b5943d-f92a-4d84-958a-5171d7641d12.png"},"53254542-d08d-4ee3-949d-28f3ce1856a2":{"name":"obstacle","sourceUrl":"assets/v3/animations/rdehWjgdm_M7xHWOIendp8PZecZ_eVXSyMkYgSHiNUA/53254542-d08d-4ee3-949d-28f3ce1856a2.png","frameSize":{"x":302,"y":46},"frameCount":1,"looping":true,"frameDelay":4,"version":"qmd1VnUIxXCogJkliaUvVtm1BEYm1HBC","loadedFromSource":true,"saved":true,"sourceSize":{"x":302,"y":46},"rootRelativePath":"assets/v3/animations/rdehWjgdm_M7xHWOIendp8PZecZ_eVXSyMkYgSHiNUA/53254542-d08d-4ee3-949d-28f3ce1856a2.png"},"8b773162-580e-41b1-b3d2-2f67c54327cd":{"name":"obstacle_2","sourceUrl":"assets/v3/animations/rdehWjgdm_M7xHWOIendp8PZecZ_eVXSyMkYgSHiNUA/8b773162-580e-41b1-b3d2-2f67c54327cd.png","frameSize":{"x":47,"y":203},"frameCount":1,"looping":true,"frameDelay":4,"version":"RtMjxRJJjp5TXNd6ZBE86v20S2uKG3VF","loadedFromSource":true,"saved":true,"sourceSize":{"x":47,"y":203},"rootRelativePath":"assets/v3/animations/rdehWjgdm_M7xHWOIendp8PZecZ_eVXSyMkYgSHiNUA/8b773162-580e-41b1-b3d2-2f67c54327cd.png"},"c1d2f319-637d-45cf-9277-c9b8f593b1f7":{"name":"obstacle_3","sourceUrl":"assets/v3/animations/rdehWjgdm_M7xHWOIendp8PZecZ_eVXSyMkYgSHiNUA/c1d2f319-637d-45cf-9277-c9b8f593b1f7.png","frameSize":{"x":93,"y":93},"frameCount":1,"looping":true,"frameDelay":4,"version":"KTM95_2Yl39xdPD4.Y7FW.L7Hkc8_fMF","loadedFromSource":true,"saved":true,"sourceSize":{"x":93,"y":93},"rootRelativePath":"assets/v3/animations/rdehWjgdm_M7xHWOIendp8PZecZ_eVXSyMkYgSHiNUA/c1d2f319-637d-45cf-9277-c9b8f593b1f7.png"}}};
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

//creating the pacman and ghost
var pacman = createSprite(20, 20);
pacman.setAnimation("pacman");
pacman.scale = 0.15;
background("black");
//Creating Obstacles
var obstacle1 = createSprite(195,76);
obstacle1.setAnimation("obstacle");
var obstacle2 = createSprite(195,250);
obstacle2.setAnimation("obstacle_2");
var obstacle3 = createSprite(100,250);
obstacle3.setAnimation("obstacle_3");
var obstacle4 = createSprite(300,250);
obstacle4.setAnimation("obstacle_3");
//Creating Point Pills
var pills = createGroup();
var dots;
var TotDots = 0;
var score = 0;
var EatDots = 0;
function createdots(numdots,x_coor,y_coor) {
  for (var i=0; i< numdots; i++)
{
  dots = createSprite(x_coor+20*i,y_coor,5,5);
  dots.shapeColor="orange";
  pills.add(dots);
 TotDots++;
}
}
//Create first train of dots
createdots(16,50,30);
//Create second train of dots
createdots(16,50,120);
//Create 3rd train of dots
createdots(6,50,180);
//Create 4th train of dots
createdots(6,245,180);
//Create 5th train of dots
createdots(6,50,330);
//Create 6th train of dots
createdots(6,245,330);
createEdgeSprites();
function draw(){ 
  background("black");
  //Left arrow key to move pacman left
  if (keyDown("left"))
  {
    pacman.setSpeedAndDirection(5,180);
    pacman.rotation = 180;
    if (pacman.x<ghost.x){
      ghost.setSpeedAndDirection(5, 180);
    }
    if (pacman.x>ghost.x){
      ghost.setSpeedAndDirection(5, 360);
    }
  }
  // Right arrow key to move pacman right
  if (keyDown("right"))
  {
    pacman.setSpeedAndDirection(5,360);
    pacman.rotation = 360;
  }
  // up arrow key to move pacman up
  if (keyDown("up"))
  {
    pacman.setSpeedAndDirection(5,270);
    pacman.rotation = 270;
  }
  // down arrow key to move pacman down
  if (keyDown("down"))
  {
    pacman.setSpeedAndDirection(5,90);
    pacman.rotation = 90;
    if (__) {
      
    }
    if (__) {
      
    }
  }
  
 
  for (var i = 0; i < TotDots; i++) {
    if (pills.get(i) != undefined && pills.get(i).isTouching(pacman)) {
      pills.get(i).destroy();
      score = score+50;
      EatDots++;
    }
  }
  fill("orange");
  text(score, 20, 20);
  if (EatDots == TotDots) {
  var success = createSprite(200,200);
  success.setAnimation("youwin");
  success.scale = 0.5;
  pacman.destroy();
  }
  if (((pacman.collide(obstacle1) || pacman.collide(obstacle2)) || pacman.collide(obstacle3)) || pacman.collide(obstacle4)) {
    pacman.velocityX = 0;
    pacman.velocityY = 0;
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
