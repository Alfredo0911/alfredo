function setup() {
  // put setup code here
  createCanvas(800,600);
  j=0;
}

function draw() {
  // put drawing code here
  background(200);

  strokeWeight(3)
  point(200,100);
  line(0,0,50,180);

  fill(224,255,255)
  rect(150,80, 20, 100);
  stroke(224,255,255);
  ellipse(150 ,80 ,20 ,20);
  ellipse(150 ,100 ,20 ,20);

  for (var i=0; i<=400; i++){
    x = i
    y = 300 + 20*Math.sin(x)
    point(x,y)
  }

  var y = 200 + 20*Math.sin(PI*j/20)
  j +=1
  fill(99, 3, 48)
  ellipse(300, y, 50, 50)
  
}