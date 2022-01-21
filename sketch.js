let mouse;
let center;
const width = 200;
const height = 200;

function setup() {
    createCanvas(width,height);
}

function draw() {
    background(200);

    mouse = new createVector(mouseX, mouseY);

    center = new createVector(width / 2, height / 2);

    mouse.sub(center);

    mouse.mult(0.5);
    translate(width / 2, height/2);
    line(0, 0, mouse.x, mouse.y);
}