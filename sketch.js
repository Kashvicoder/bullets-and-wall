var bullet,speed,weight;
var damage = 0;
var wall,thickness;
function setup() {
  createCanvas(1600,400);
 bullet = createSprite(50, 200, 50, 10);
 wall = createSprite(1200,200,thickness,height/2);
 wall.shapeColor = "grey";
 bullet.shapeColor = "white"
  speed=random(223,321);
  weight=random(30,52);
  thickness = random(22,83);
  bullet.velocityX = speed;
}

function draw() {
  background(0);
  
  if(bullet.isTouching(wall)) {
    bullet.velocityX = 0;
    damage=0.5*weight*speed*speed/thickness*thickness*thickness;
  
    if (damage<10){
      wall.shapeColor = "green";
    }
    
    if (damage>10){
      wall.shapeColor = "red";
    }
  }
 

  drawSprites();
}