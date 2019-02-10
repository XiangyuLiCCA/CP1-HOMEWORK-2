function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255,0,0);//red
  noStroke();
  
  fill(255,255,0);//yello
  rect(140,0,320,mouseX);
  
  fill(255,255,255);//wite
  rect(0,mouseX,140,mouseX);
  
  fill(0,0,220);//bottom blue
  rect(350,360,60,40);
  
  fill(0,0,220);//up blue
  rect(0,0,140,170);
  
  stroke(0)
  strokeWeight(10);
  line(0,mouseX,400,mouseX);//long X line
  strokeWeight(20);
  line(140,0,140,400);// long Y line
  line(350,mouseX,350,400);//short Y line
  
  strokeCap(SQUARE)
  strokeWeight(30)
  line(350,360,400,360);//short lower y line
  
  strokeWeight(40)
  line(0,160,140,160);//short upper x line
  
}
