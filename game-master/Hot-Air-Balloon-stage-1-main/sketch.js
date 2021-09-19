var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg

function preload(){
bgImg = loadImage("assets/bg.png")

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

  background.VelocityX = -3;


  if (background.x < 0){
    background.x = background.width/2;
  }


        
          //making the hot air balloon jump
          if(keyDown("up_arrow")) {
            balloon.velocityY = -6 ;
            
          }
        
          if(keyDown("down_arrow")) {
            balloon.velocityY = 6  ;
        
          }
        
          if(keyDown("right_arrow")) {
            balloon.VelocityX = 6 ;
        
          }
        
          if(keyDown("left_arrow")){
            balloon.VelocityX = -6 ;
    }
          


          //adding gravity
           balloon.velocityY = balloon.velocityY + 0;
   
        drawSprites();
        
}

