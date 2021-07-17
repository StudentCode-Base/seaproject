var seaSprite,seaImg
var shipSprite,shipImg
function preload(){
seaImg=loadImage("sea.png")
shipImg=loadAnimation("ship-1.png","ship-2.png")
}

function setup(){
  createCanvas(400,400);
  seaSprite=createSprite(400,200)
  seaSprite.addImage(seaImg)
  seaSprite.scale=0.4
  seaSprite.velocityX=-4
  shipSprite=createSprite(130,200,20,20)
  shipSprite.addAnimation("ship",shipImg)
  shipSprite.scale=0.3

}

function draw() {
  background("blue");
  if(seaSprite.x<0){
    seaSprite.x=seaSprite.width/5
  }
 drawSprites()

}