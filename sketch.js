var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var birdimage
function preload(){
bgImg = loadImage("assets/bg.png")
birdimage= loadImage("assets/obstop2.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){

//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;



}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY= -6 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY+0.1;
           osbtacle()
        drawSprites();
        
}
function osbtacle()
{
  if(frameCount%200===0)
  {
    var birds =createSprite(200,100,50,10)

  birds.addImage("flying",birdimage)
  birds.scale=0.1
  birds.velocityX=-4
  }
 
}










