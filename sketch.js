var canvas;
var h1;
var i = 0;
var bgcolour;
var fontsize = 50;


function setup() {
  createCanvas(255, 255);
	h1 = createElement("h1", "Waiting.");
    bgcolour = color(200,200,100)
    var button = createButton("Click on me for my fav num");
    button.mousePressed(ButtonAction)
}

function ButtonAction(){
    h1.html("now I will show you my fav number");
    if (i <= 5){
        i = i + 1;
        bgcolour = color(random(200),random(200),random(200));
    }else  {
        i = (0);
    }
}


function drawNum(){
    fill(0);
    textSize(fontsize);
	text(i, 100, 100);
}


function draw(x) {
  background(bgcolour);
  textAlign(CENTER);
  drawNum( fontsize );
}