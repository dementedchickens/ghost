let ghost;
let gImg;
let cImg;
let bImg;
let candles=[];

function preload(){
  gImg=loadImage("ghost.png");
}
//Image not supported on Chrome :)

function setup(){
  createCanvas(600, 450);
ghost= new Ghost();
}

function keyPressed(){
  if (key==' '){ ghost.jump();}
}


function draw()
{
if (random(1)<0.005){
  candles.push(new Candle());
}

  background(220);
ghost.show();
ghost.move();

for (let c of candles){
  c.move();
  c.show();
  if(ghost.hits(c)){
    console.log('game over');
    noLoop();
  }
}


} 
