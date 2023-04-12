function setup() {
  createCanvas(640, 480);
}

function draw() {
  //biru tengah
  background(51,153,255);
  
  //biru atas
  fill(0,128,255);
  rect(0,0,640,145);
  
  //bawah
  fill(102,178,255);
  rect(0,330,640);
  
  fill(255);
  noStroke();
  
  ellipse(340,150,150);
  
  ellipse(230,220,150);
  ellipse(340,220,150);
  ellipse(430,220,150);
  
  ellipse(160,300,150);
  ellipse(240,310,150);
  ellipse(330,310,150);
  ellipse(420,310,150);
  ellipse(500,310,150);
  

  
  
}