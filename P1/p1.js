
// Janelynn Camingue
// CMPM 179
// P1.js

// Declare variable for the image.
// The image is from https://vignette.wikia.nocookie.net/powerpuff/images/7/7c/V.jpg/revision/latest/scale-to-width-down/481?cb=20140104042322
var ppg;

// Make the functions.

// Load in the image.
function preload(){
  ppg = loadImage("ppg.jpg");
}
// Set up the canvas size (in this case it's the size of the downloaded image).
function setup(){
  createCanvas(481 , 360);
}
// Function for what will happen when the user drags the mouse.
function mouseDragged(){
  inputForMDragging(mouseX, mouseY);


}
// Function for what happens when the user presses a key.
// In this case, if 'c' is pressed, the canvas will clear
// but will immediately restart.
function keyTyped(){
  if(key==='c'){
    clear();
  }
}
// Function for drawing on the canvas.
// Here, it also checks what will happen if the user presses the UP key,
// in which diagonal shapes will be generated and down is flipping it.
// Pressing nothing will continue the generation.
function draw(){
  if (keyIsDown(UP_ARROW)){
    diagL(random(width), random(height));
    diagR(random(width),random(height));
  }
  else if (keyIsDown(DOWN_ARROW)){
    flip();
  }
  else if ((!(keyIsDown(UP_ARROW))) || ((!(keyIsDown(DOWN_ARROW))))){
    generateTopLeft(random(width), random(height));
    generateLowerRight(random(width), random(height));
    generateLowerLeft(random(width), random(height));
    generateTopRight(random(width), random(height));
  }
}
// This is the function for the result of dragging the mouse
// It generates triangles and circles
function inputForMDragging(x , y){
  let pixel = ppg.get(x , y);
  fill(pixel);
  noStroke();
  triangle(x + 10 , y + 10 , x+10, y+15, x+20, y+10);
  ellipse(x + random(10) , y + random(10) , 3, 3);


}
// This will generate a flipped image.
function flip(x,y){
  var x = floor(random(ppg.width));
  var y = floor(random(ppg.height));
  for (i=0; i<=60;i++){
    x+=1;
    y+=1;
    let pixelN = ppg.get(x , y);
    fill(pixelN);
    noStroke();
    rect(x , (height)-y, 10, 5);
  }
}
// This is for generating the top left part of the image.
function generateTopLeft(x,y){
  var x = floor(random(ppg.width/2));
  var y = floor(random(ppg.height/2));
  var maxX=width/2;
  var maxY=height/2;
  for (i=0; i<=21;i++){
    x+=1;
    y+=1;
    maxX=maxX-x;
    maxY=maxY-y;
    let pixelN = ppg.get((width/2)-x , (height/2)-y);
    fill(pixelN);
    noStroke();
    rect(maxX, maxY,12,3);
  }
}
// This is for generating the lower left part of the image.
function generateLowerLeft(x,y){
  var x = floor(random(ppg.width/2));
  var y = floor(random(ppg.height/2));
  var maxX=width/2;
  var maxY=height/2;
  for (i=0; i<=21;i++){
    x+=1;
    y+=1;
    maxX=maxX-x;
    maxY=maxY+y;
    let pixelN = ppg.get((width/2)-x , (height/2)+y);
    fill(pixelN);
    noStroke();
    rect(maxX, maxY,12, 7);
  }
}
// This is for generating the lower right part of the image.
function generateLowerRight(x,y){
  var x = floor(random(ppg.width/2));
  var y = floor(random(ppg.height/2));
  var maxX=width/2;
  var maxY=height/2;
  for (i=0; i<=21;i++){
    x+=1;
    y+=1;
    maxX=maxX+x;
    maxY=maxY+y;
    let pixelN = ppg.get((width/2)+x , (height/2)+y);
    fill(pixelN);
    noStroke();
    rect(maxX, maxY,12,3);
  }
}
// This is for generating the top right part of the image.
function generateTopRight(x,y){
  var x = floor(random(ppg.width/2));
  var y = floor(random(ppg.height/2));
  var maxX=width/2;
  var maxY=height/2;
  for (i=0; i<=20;i++){
    x+=1;
    y+=1;
    maxX=maxX+x;
    maxY=maxY-y;
    let pixelN = ppg.get((width/2)+x , (height/2)-y);
    fill(pixelN);
    noStroke();
    rect(maxX, maxY,12,7);
  }
}
// This is for generating a diagonal shape.
function diagR(x,y){
  for (i=0; i<=20;i++){
    x+=1;
    y+=1;
    let pixelO = ppg.get(x , y);
    fill(pixelO);
    noStroke();
    ellipse(x , y + 10 , 2, 5);
  }
}
// This is for generating a diagonal shape that is the opposite of diagR().
function diagL(x,y){
  for (i=0; i<=20;i++){
    x-=1;
    y+=1;
    let pixelO = ppg.get(x , y);
    fill(pixelO);
    noStroke();
    ellipse(x , y + 10 , 5, 2);
  }
}
