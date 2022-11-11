let drawing =[];

function setup() {
  createCanvas(600, 600);
  background(220);
  strokeWeight (5);
  noFill();
}

function draw() {

  if (mouseIsPressed) {
      // line(mouseX, mouseY, pmouseX, pmouseY);
      drawing.push ([mouseX, mouseY]);
  } 
     
}
function keyTyped(){

  if (key === 's') { 
    //save drawing
    saveCanvas ('fileName', 'png');
  } else if (key === 'd') {
    //display image
    for (let i = 0; i < drawing.length - 1; i++) {
    // line(drawing[i][0], drawing [i][1],drawing [i + 1][0], drawing [i + 1][1]);
    curveVertex (drawing[i][0], drawing [i][1])
    }
   endShape();
  }
  return false;
  }