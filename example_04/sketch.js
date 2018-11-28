let nums = [0x7E, 0x30, 0x6D, 0x79, 0x33, 0x5B, 0x5F, 0x70, 0x7F, 0x7B]
let index = 0;

function setup() {
    createCanvas(400, 400);
    frameRate(5);
}

function draw() {
    background(0);
    sevenSegment(nums[index]);
    index = (index + 1) % nums.length;
}

function getColor(val, shift) {
    let r = 255;
    let g = 0;
    let b = 0;
    let a = 40 + 255 * ((val >> shift) & 1);
    return color(r, g, b, a);
}

function sevenSegment(val) {
    push();
    stroke(0);

    noFill();
    fill(getColor(val, 6));
    rect(60, 20, 80, 20, 10); // A
    fill(getColor(val, 5));
    rect(140, 40, 20, 100, 10); // B
    fill(getColor(val, 4));
    rect(140, 160, 20, 100, 10); // C
    fill(getColor(val, 3));
    rect(60, 260, 80, 20, 10); // D
    fill(getColor(val, 2));
    rect(40, 160, 20, 100, 10); // E
    fill(getColor(val, 1));
    rect(40, 40, 20, 100, 10); // F
    fill(getColor(val, 0));
    rect(60, 140, 80, 20, 10); // G

    pop();
}