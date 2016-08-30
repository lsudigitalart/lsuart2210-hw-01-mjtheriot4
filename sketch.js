
function setup(){
  createCanvas(900, 600);
  background(0);
//main ellipes - white,none
  noStroke();
  ellipse(400, 300, 500);
//black shadow - black,none
  noStroke();
  fill(0);
  ellipse(425, 300, 450, 490);
//orbit ring
  noFill();
  stroke(255);
  strokeWeight(4);
  ellipse(425, 300, 800, 200);
//semi-circle that covers orbit line
strokeWeight(1);
  fill(0);
  noStroke();
  arc(425, 300, 450, 490, PI, 2*PI, OPEN);
  //main ellipse outline
  noFill();
  stroke(255);
  ellipse(400, 300, 500);



  noStroke();
  fill(255);
  ellipse(490, 395, 200);
  noStroke();
  fill(0);
  ellipse(510, 395, 160, 190);
  noFill();
  stroke(255);
  ellipse(490, 395, 200);


  noStroke();
  fill(255);
  ellipse(490, 370, 50);
  noStroke();
  fill(0);
  ellipse(485, 370, 44, 48);
  noFill();
  stroke(255);
  strokeWeight(.25)
  ellipse(490, 370, 50);


}
