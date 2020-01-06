let img;
let layer;
let col;
let pos;
let retro;
let colors;
let pickedColor;

function preload() {
  let img = ['./photo_1.jpg', './photo_2.jpg', './photo_3.jpg', './photo_4.jpg'];
  let pos = floor(random(img.length));
  retro = loadImage(img[pos]);
}

function setup() {
  createCanvas(720, 720);
  layer = createGraphics(720,720);
  col = color(0,0,0);
  strokeWeight(1);
}

function draw() {
  image(retro, 0, 0);
  image(layer,0,0);
  noFill();
  stroke(col) ;
  ellipse(mouseX, mouseY, 50);
}

function mousePressed() {
  layer.noStroke(); 
  colors = [color('blue'), color('yellow'), color('green'), color('red')];
  pickedColor = random(colors);
  layer.fill( pickedColor ); 
  layer.ellipse( mouseX, mouseY, 50); 
}