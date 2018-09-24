function setup() {
 /// background(0);
  createCanvas(500, 500);
  //strokeWeight(1);
  //colorMode(HSB, 100);
  // for (var i = 0; i < 100; i++) {
  //   for (var j = 0; j < 100; j++) {
  //     stroke(i, j, 100);
  //     point(i, j);
  //   }
  // }
  
}

function draw() {
  background(255)
  //background(0, 20, 40);
  //colorMode(HSB, 100);
  //stroke(100, 60, 20)
  stroke(0)
  for (let y = 10; y <= 480; y +=5){
    for (let x = 10; x <= 480; x +=5){
      if(x <= random(1, 479)){ //10 - 350
        line(x+2,y+2,x+3, y+3)
      } else {
        line(x,y,x-3, y+3)
    }

  }

  }

}

// function setup(){
// noStroke();
// colorMode(HSB, 100);
// for (var i = 0; i < 100; i++) {
//   for (var j = 0; j < 100; j++) {
//     stroke(i, j, 100);
//     point(i, j);
//   }
// }

// }