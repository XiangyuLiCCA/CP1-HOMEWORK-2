
function setup() {
  createCanvas(600, 600);
}

var ball = 0;
var ballSpeed = 15;
var ballChangeX = ballSpeed;

var ball2 = 30;
var ballSpeed2 = 10;
var ballChangeX2 = ballSpeed2;

var bc = 1;
var bcSpeed = 1;
var bcChangeX = bcSpeed;


function draw() {
  background(100,bc,100);
  bc = bc + bcChangeX;
  
  if (bc >= 255) {
    bcChangeX = - bcSpeed;
  }
  if (bc <= 0) {
    bcChangeX = bcSpeed;
  }

  fill(250,100,25,150);
  ellipse(ball, height/4, 130);
  ball = ball + ballChangeX;
  
  if (ball >= width) {
    ballChangeX = -ballSpeed;
  }
    if (ball <= 0) {
    ballChangeX = ballSpeed;
  }

  fill(200,255,200,200);
  ellipse( ball2, height/2, 20);
  ball2 = ball2 + ballChangeX2;

  if (ball2 >= height) {
    ballChangeX2 = -ballSpeed2;
  }

  if (ball2 <= 0) {
    ballChangeX2 = ballSpeed2;
  }
}
