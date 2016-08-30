function setup (){
  createCanvas(900, 600);
  background(0);
//main

}

var a = 550;

function draw() {
noFill();
stroke(255);
ellipse(300, 300, a, 550);
ellipse(300, 300, 550, a);
a-=(4000/a);

if (a<=300) {
noFill();
stroke(255);
ellipse(725, 425, a, 300);
ellipse(725, 425, 300, a);
}
if (a<=150) {
noFill();
stroke(255);
ellipse(725, 125, a, 150);
ellipse(725, 125, 150, a);
}
if (a <= 0) {
  noLoop();
}
}
