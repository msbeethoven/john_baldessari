let retro;

function preload() {
  let img = ['./photo_1.jpg', './photo_2.jpg', './photo_3.jpg', './photo_4.jpg'];
  let pos = floor(random(img.length));
  retro = loadImage(img[pos]);
}

function setup() {
  createCanvas(720, 700);
  background(retro);
}

function mousePressed() {
  let colors = [color('blue'), color('yellow'), color('green'), color('red')];
  let pickedColor = random(colors);
  fill(pickedColor);
  noStroke();
  ellipse(mouseX, mouseY, 50, 50);
}