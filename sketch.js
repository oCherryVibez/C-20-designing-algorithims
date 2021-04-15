var f,m;

function setup() {
  createCanvas(1200,800);
  f=createSprite(600, 400, 50, 80);
  m=createSprite(400,200,80,30);
  f.shapeColor="pink";
  m.shapeColor="pink";
}

function draw() {
  background(0);  
  m.x=World.mouseX;
  m.y=World.mouseY;

  if(m.x-f.x<f.width/2+m.width/2
    && f.x-m.x<f.width/2+m.width/2
    && f.y-m.y<f.height/2+m.height/2
    && m.y-f.y<f.height/2+f.height/2){
m.shapeColor="magenta";
f.shapeColor="magenta";
    }
    else{
      f.shapeColor="pink";
      m.shapeColor="pink";  
    }
  drawSprites();
}