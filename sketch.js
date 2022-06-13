var bomb,coin,energyDrink,path,power,boy;
var bombImg,coinImg,energyDrinkImg,pathImg,powerImg,boyImg;
var bombG,coinG,energyDrinkG,powerG;

// gamestates
var PLAY=1;
var END=0;
var gamestate=1;

var edges;


function preload(){

  bombImg = loadImage("bomb.png");
  coinImg = loadImage("coin.png");
  energyDrinkImg = loadImage("energyDrink.png");
  pathImg = loadImage("path.png");
  powerImg = loadImage("power.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
 

 
}

function setup(){
  createCanvas(400,400);

  path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2

  boy = createSprite(180,340,10,10);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;

left_boundry = createSprite(0,0,100,800);
left_boundry.visible=false;

right_boundry = createSprite(410,0,100,800);
right_boundry.visible=false;

}

function draw() {
 background("white");

if(path.y>400){
  path.y=height/2;
}

boy.x=World.mouseX;
boy.collide(left_boundry);
boy.collide(right_boundry);
  drawSprites();

}
