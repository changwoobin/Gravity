const width = 640;
const height = 360;

class Mover {
    constructor() {
        this.position = createVector(width /2, height/2);
        this.velocity = createVector();
        this.acceleration = createVector();
        this.topspeed = 5;
    }

    update() {
        var mouse = createVector(mouseX, mouseY);
        this.acceleration = p5.Vector.sub(mouse, this.position);
        this.acceleration.setMag(0.2);

        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topspeed);
        this.position.add(this.velocity);
    }

    display() {
        stroke(0);
        strokeWeight(2);
        fill(127);
        ellipse(this.position.x, this.position.y, 48, 48);
    }
}
let mover;

function setup() {
    createCanvas(width,height);
    mover = new Mover();
}

function draw() {
    background(200);

    mover.update();
    mover.display();
}