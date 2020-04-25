var r = 249;
var g = 166;
var b = 2;

function draw(){
  r = map(mouseX,77,300,0,211);
  g = map(mouseX,50,6100,50,100);
  b = map(mouseX,0,12,5,0);
  background(r,g,b);
  fill(255);
  ellipse(mouseX,mouseY,50,50);
} 