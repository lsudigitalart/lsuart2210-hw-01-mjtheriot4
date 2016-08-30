function setup (){
  createCanvas(900, 600);
  background(0);
//main
  stroke(255);
  strokeWeight(1);
  noFill();
  ellipse(450, 300, 500);
//vertical lattice
  stroke(255);
  noFill();
  ellipse(450, 300, 400, 500);

  stroke(255);
  noFill();
  ellipse(450, 300, 300, 500);

  stroke(255);
  noFill();
  ellipse(450, 300, 200, 500);

  stroke(255);
  noFill();
  ellipse(450, 300, 100, 500);

  stroke(255);
  strokeWeight(.5);
  noFill();
  ellipse(450, 300, 0, 500);
//horizontal lattice

stroke(255);
noFill();
strokeWeight(1);
ellipse(450, 300, 500, 400);

stroke(255);
noFill();
ellipse(450, 300, 500, 300);

stroke(255);
noFill();
ellipse(450, 300, 500, 300);

stroke(255);
noFill();
ellipse(450, 300, 500, 200);

stroke(255);
noFill();
ellipse(450, 300, 500, 100);

stroke(255);
strokeWeight(.5);
noFill();
ellipse(450, 300, 500, 0);



}

var a = 400;

function draw() {
noFill();
stroke(255);
ellipse(500, 300, a, 400);
ellipse(500, 300, 400, a);
a-=20;
if (a < 0) {
  noLoop();

}
}
