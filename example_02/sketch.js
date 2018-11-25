var paddingBox = 150
var xPosition = 600 - paddingBox;
var yPosition = 600 - paddingBox;
var sBHeight = 100;
var sBLength = 100;
var BBLength = 200;
var BBHeight = 100;
var canvasHeight = 600;
var canvasLength = 600;


function setup() {
    createCanvas(canvasHeight, canvasLength);
}


function draw() {
    background(100)
    if (mouseX > xPosition && mouseX < xPosition + sBLength && mouseY < yPosition + sBHeight && mouseY > yPosition) {
        bigSquare = rect(xPosition - BBLength, yPosition, BBLength, BBHeight, 30)
    } else {
        smallSquare = rect(xPosition, yPosition, sBLength, sBHeight, 30)
    }
}