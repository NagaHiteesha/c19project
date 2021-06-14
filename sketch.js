
var fixedRect,MovingRect;

function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(300,200,50,80);
  MovingRect = createSprite(400,200,80,30);
 
  
}

function draw() {
  background(255,255,255);  
  MovingRect.x = World.mouseX;
  MovingRect.y = World.mouseY;
  if(MovingRect.x-fixedRect.x < fixedRect.width/2 + MovingRect.width/2){
    fixedRect.shapeColor = "red";
    MovingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "green";
    MovingRect.shapeColor = "green";
  }
  drawSprites();
}