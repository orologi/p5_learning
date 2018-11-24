var canvas;
var h1;
var i = 0;
var bgcolour;


function setup() {
  createCanvas(200, 200);
	h1 = createElement("h1", "Waiting.");
    bgcolour = color(200)
    var button = createButton("Click on me for my fav num");
    button.mousePressed(ButtonAction)
}

function ButtonAction(){
	
    
    h1.html("now I will show you my fav number");
    if (i <= 5){
       
        i = i + 1;
        bgcolour = color(random(255));
    }else  {
        i = ("no more fav num");
    }
}


function drawNum(){
    fill(0);
	text(i, 100, 100);
}


function draw(x) {
  background(bgcolour);
  textAlign(RIGHT);

  drawNum( width  );
}