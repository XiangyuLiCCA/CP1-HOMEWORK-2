function setup() {
    createCanvas(400, 400);
    background(220);
    // HSB with H range 0-400, S range 0-400, B range 0-100:
    colorMode(300,59,95,243,100,243);
}

function draw() {
    let x = random(width);
    let y = random(height);
    fill(x, y, 120);
    noStroke()
    ellipse(x, y, 30);
}
