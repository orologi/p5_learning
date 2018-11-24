var canvas;
var h1;

var i = 0;

function setup() {
  createCanvas(400, 400);
	h1 = createElement("h1", "Waiting.");
}


function mousePressed(){
    
	h1.html("now I will show you my fav number");
    if (i <= 5){
        createP ("My fav num " +i);
        i = i+1;
    }else if (i <= 6) {
        createP("no more fav num").addClass('text');
    	i = i+1;
        console.log(i)
        
    }else if(i = 7){
    //pass
    }
    
}



function draw() {
  background(220);
  
}