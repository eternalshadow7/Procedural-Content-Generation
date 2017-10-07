// Ways of Brightening a Day Generator
// 10/4/17

var bouquet;
var chocolates;
var loveLetter;
var movie;
var shoppingBags;
var dinner;
var compliment;
var picnic;
var car;
var boardwalk;
var dates;
var outings;
var origami;
var games;
var mug;
var jar;
var teddy;
var listen;
var hug;
var iou;

// Here I load the images.
// I do not own the images
function preload(){
  bouquet = loadImage("bouquet.jpg");
  chocolates=loadImage("chocolates.jpg");
  loveLetter=loadImage("loveLetter.jpg");
  movie=loadImage("movie.jpg");
  shoppingBags=loadImage("shoppingbags.jpg");
  dinner=loadImage("dinner.jpg");
  compliment=loadImage("compliment.jpg");
  picnic=loadImage("picnic.jpg");
  car=loadImage("car.jpg");
  boardwalk=loadImage("boardwalk.jpg");
  origami=loadImage("origami.jpg");
  games=loadImage("games.jpg");
  mug=loadImage("mug.jpg");
  jar=loadImage("jar.jpg");
  teddy=loadImage("teddy.jpg");
  listen=loadImage("listen.jpg");
  hug=loadImage("hug.jpg");
  iou=loadImage("iou.jpg");

}
// The biggest size is around 950, but that's ok
function setup(){
  createCanvas(900 , 900);
  frameRate(120);
}

function draw(){

  }

// Press A, B, or C
// function for reading in user input
function keyTyped() {
  if (key === 'a') {
    clear();
    outings = [movie, shoppingBags, dinner, picnic, car, boardwalk, games];
    dates=random(outings);
    image(dates,0,0);
  }else  if (key === 'b') {
    clear();
    noMoney = [loveLetter, compliment, origami, jar, listen,hug, iou];
    free=random(noMoney);
    image(free,0,0);
  } else if (key ==='c'){
    clear();
    gifts=[bouquet,chocolates, mug, teddy];
    things=random(gifts);
    image(things,0,0);
  }
}
