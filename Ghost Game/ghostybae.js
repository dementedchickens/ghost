let ghost;
let gImg;
let cImg;
let bImg;
let candles = [];
var score = 0;

function preload() {
  gImg = loadImage("ghost normal.gif");
  cImg = loadImage("candle1.gif");
  bImg = loadImage("background.png");
}

function setup() {
  createCanvas(600, 450);
  ghost = new Ghost();
}

function keyPressed() {
  if (key == ' ') {
    ghost.jump();
  }
}

function draw() {
  if (random(1) < 0.005) {
    candles.push(new Candle());
  }

  background(bImg);
  ghost.show();
  ghost.move();

  for (let c of candles) {
    c.move();
    c.show();
    if (ghost.hits(c)) {
      console.log('game over');
      noLoop();
    }
  }

  text(score, 400, 30);
}

function keyTyped() {
  if (key == " ") {
    score = score + 5;
  }
}
