function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(300);
  noStroke();
  
  fill(255,0,0);//red
  rect(mouseY,0,320,400);
  
  fill(0,120,255);//blue
  rect(0,320,180,80);
  
  fill(2550,255,0);//yellow
  rect(350,360,60,40);
  
  stroke(0)
  strokeWeight(10);
  line(0,320,400,320);//long X line
  
  strokeWeight(15);
  line(mouseY,0,mouseY,400);// long Y line
  line(350,320,350,400);//short Y line
  
  strokeCap(SQUARE)
  strokeWeight(15)
  line(350,360,400,360);//short lower y line
  
  strokeWeight(40)
  line(0,160,180,160);//short upper x line
  
}
