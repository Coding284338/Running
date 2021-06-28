var runImage;
var runSprite;
var manImage;
var manSprite;
var left;
var right;
function preload(){
  //pre-load images
runImage = loadAnimation("path.png");
manImage = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  runSprite = createSprite(200,380,800,20);
  runSprite.addAnimation("track",runImage);
  runSprite.velocityY = 4;
  manSprite = createSprite(200,380,20,20);
  manSprite.addAnimation("runner",manImage);
  manSprite.scale = 0.1; 
  left = createSprite(40,200,20,800);
  right = createSprite(360,200,20,800);
  right.visible = false;
  left.visible = false;
}

function draw() {
  background("Green");
  drawSprites();
  manSprite.x = mouseX;
  manSprite.collide(left);
  manSprite.collide(right);
  if(runSprite.y > 400)
{
  runSprite.y = 200;

}
}

