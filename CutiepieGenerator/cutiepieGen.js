// Janelynn Camingue
// This is a generator that generates an image of my dog.
// There is user input by dragging the mouse.
var cutiepie;
// loads in the picture of my dog
function preload(){
  cutiepie = loadImage("cutiepie.jpg");
}
function setup(){
  createCanvas(1080 , 1920);
}
function mouseDragged(){
  touch(mouseX, mouseY);
}
// draws a square if user drags the mouse
function draw(){
  frameRate(120);
  touch(random(width) , random(height));
}
function touch(x , y){
  let pixel = cutiepie.get(x , y);
  fill(pixel);
  noStroke();
  rect(x + random(20) , y + random(20) , 10, 10);
}
