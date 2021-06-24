

var dragon,dragon1,dragon2, dragonImage,dragonImage1;
var rocket , rocketImage,backgroundImg;

function preload(){
 
 dragonImage = loadImage("images/dragon.png");
 rocketImage = loadImage("images/rocket.png");
 backgroundImg = loadImage("images/background.png");
  
}

function setup() {
  createCanvas(displayWidth, displayHeight-100);
  
  dragon = createSprite(displayWidth/2+30,20,50);
  dragon.addImage("dragon",dragonImage);
  dragon.scale=0.5;
  dragon.velocityY = 1;

  dragon1 = createSprite(displayWidth/2+-70,20,50);
  dragon1.addImage("dragon1",dragonImage);
  dragon1.scale=0.5;
  dragon1.velocityY = 1;

  dragon2 = createSprite(displayWidth/2+130,20,50);
  dragon2.addImage("dragon2",dragonImage);
  dragon2.scale=0.5;
  dragon2.velocityY = 1;

  rocket = createSprite(displayWidth/2 , displayHeight-200 , 100 , 200);
  rocket.addImage("rocket", rocketImage);
  rocket.scale=0.5;
  
}

function draw() {
  background(255);

  
  drawSprites();
}


