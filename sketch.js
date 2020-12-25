var car,wall;
var speed,weight;




function setup() {
  createCanvas(800,400);
 car=createSprite(500, 200, 50, 50);
 car.shapeColor="blue"
 wall=createSprite(680, 200, 30, height/2);
 speed=Math.round(random(55,90));
 weight=Math.round(random(400,1500));
}

function draw() {
car.velocityX=speed;


if(wall.x-car.x <= car.width/2+wall.width/2 )
{car.velocityX=0;
  var de=0.5*weight*speed*speed/22509;
  if(de>100){

   car.shapeColor="pink";
  }
  if(de<100&&de>80)
  {
    car.shapeColor="yellow";
  }
  if(de<80)
  {
    car.shapeColor="green"
  }
  

  }
  else{
  car.shapeColor="blue";
}










  background(255,255,255);  
  drawSprites();
}