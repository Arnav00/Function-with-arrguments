function setup() {
  createCanvas(800,400);
  a=createSprite(400, 200, 50, 50);
  a.shapeColor="green";
  b=createSprite(200,300,50,50);
  b.shapeColor="green";
  c=createSprite(250,200,50,50);
  c.shapeColor="green";
  d=createSprite(300,100,50,50);
  d.shapeColor="green";
  e=createSprite(600,150,50,50);
  e.shapeColor="green";
  f=createSprite(700,300,50,50);
  f.shapeColor="green";

}

function draw() {
  background(255,255,255);
  a.x = World.mouseX; 
  a.y = World.mouseY; 
 if(isTouching(a,b)){
a.shapeColor="red";
b.shapeColor="red";
 }
 else{
  a.shapeColor="green";
  b.shapeColor="green";
 }

 if(isTouching(c,a)){
  c.shapeColor="red";
  a.shapeColor="red";
 }
 else{
  c.shapeColor="green";
  a.shapeColor="green";
 }
 if(isTouching(d,a)){
 d.shapeColor="red"
 a.shapeColor="red";
 }
 else{
  d.shapeColor="green";
  a.shapeColor="green";
 }
 if(isTouching(e,a)){
  e.shapeColor="red"
  a.shapeColor="red";
  }
  else{
   e.shapeColor="green";
   a.shapeColor="green";
  }
  if(isTouching(f,a)){
    f.shapeColor="red"
    a.shapeColor="red";
    }
    else{
     f.shapeColor="green";
     a.shapeColor="green";
    }
  drawSprites();
}
