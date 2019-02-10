<!DOCTYPE html>
<html>
<head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.1/p5.min.js"></script>
<style>
  html, body {
    margin: 0;
    padding: 0;
  }
</style>
<meta charset="utf-8" />
</head>
<body>
<script>

function setup() {
  createCanvas(600, 600);
}

var ball = 0;
var ballSpeed = 15;
var ballChangeX = ballSpeed;

var ball2 = 30;
var ballSpeed2 = 8;
var ballChangeX2 = ballSpeed2;

function draw() {
  background(255,190,0,180);
  fill(250,100,25,150);
  ellipse(ball, height/2, 130);
  ball = ball + 3;
  ball = ball + ballChangeX;

  if (ball >= width) {
    ballChangeX = -ballSpeed;
  }
    if (ball <= 0) {
    ballChangeX = ballSpeed;
  }

  fill(200,255,200,200);
  ellipse( height/2, ball2, 250);
  ball2 = ball2 + 5;
  ball2 = ball2 + ballChangeX2;

  if (ball2 >= height) {
    ballChangeX2 = -ballSpeed2;
  }

  if (ball2 <= 0) {
    ballChangeX2 = ballSpeed2;
  }
}

</script>
</body>
</html>
