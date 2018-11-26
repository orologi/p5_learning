var canvasY = 120;
var canvasX = 500;

var textPosition = {
    x: 365,
    y: 70,
}

var boxPosition = {
    x: 350,
    y: 10,
    dx: 413,
}

var boxSize = {
    height: 100,
    sLength: 100,
    bLength: 300,

}

function setup() {
    createCanvas(canvasX, canvasY);
}

function draw() {
    background(0)
    if (mouseX > boxPosition.x && mouseX < boxPosition.x + boxSize.sLength && mouseY < boxPosition.y + boxSize.height && mouseY > boxPosition.y) {
        bigSquare = rect(150, boxPosition.y, boxSize.bLength, boxSize.height, 30)
        fill(0, 0, 0);
        textSize(18);
        text("Share", textPosition.x, textPosition.y);
        fill(255, 0, 0);
        text('ꓷ', 413, textPosition.y);
        fill(255, 255, 255);
    } else {
        noFill();
        textSize(18);
        fill(255);
        smallSquare = rect(boxPosition.x, boxPosition.y, boxSize.sLength, boxSize.height, 30)
        fill(0)
        text("Share", textPosition.x, textPosition.y);
        text('D', 413, textPosition.y);
    }
}