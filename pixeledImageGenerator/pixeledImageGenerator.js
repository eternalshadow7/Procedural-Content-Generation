// Janelynn Camingue
// This generator turns an uploaded image to be pixelized.
// Note that the image must be inside the folder and the code must be altered
// whenever a different image needs to be generated.
// Right now, I am using my drawing of a pill I made for a game.

// Here is where you put the variable for the image.
var myImage;
// Here is where you load the image.
function preload(){
  myImage=loadImage("Pill.jpg");
}
// Here is where you set up the dimensions of the image.
function setup(){
  createCanvas(473 , 637);
}
// This is where the pixelizations begin!
function draw(){
  x =0;
  while(x<width){
   y=0;
    while(y<height){
      let pixel = myImage.get(x ,y);
      fill(pixel);
      noStroke();
      rect(x , y , 10, 10);
      y=y+10;
    }
    x=x+10;
  }
}
