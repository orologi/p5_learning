var xPosition = 350;
var yPosition = 10;
var sBHeight = 100;
var sBLength = 100;
var BBHeight = 100;
var BBLength = 300;
var canvasY = 120;
var canvasX = 500;
var letterDposY = 70;


function setup() {
    createCanvas(canvasX, canvasY);
}


function draw() {
    background(0)
    if (mouseX > xPosition && mouseX < xPosition + sBLength && mouseY < yPosition + sBHeight && mouseY > yPosition) {
        bigSquare = rect(150, yPosition, BBLength, BBHeight, 30)
        fill(0, 0, 0);
        textSize(18);
        text("Share", 365, letterDposY);
        fill(255, 0, 0);
        text('ꓷ', 413, letterDposY);
        fill(255, 255, 255);



    } else {
        noFill();
        textSize(18);

        fill(255);
        //noFill(100);
        smallSquare = rect(xPosition, yPosition, sBLength, sBHeight, 30)
        fill(0)
        text("Share", 365, letterDposY);
        text('D', 413, letterDposY);
    }
}

console.log('%c Myfriends', 'color:orange; font-weight: bold;')