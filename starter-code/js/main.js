/* eslint-disable no-undef */

// main.js
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;

const character = new Character(1,1);
const treasure = new Treasure(1,1);

// Iteration 1
function drawGrid() {
for (let i=0; i<11; i++) {
ctx.moveTo(i * 50, 0);
ctx.lineTo((50 * i), 500);
ctx.stroke();
}
//Y
for (let i=0; i<11; i++) {
ctx.moveTo(0, 50*i);
ctx.lineTo(500, 50*i);
ctx.stroke();
}
}

// DRAW EVERYTHING
function drawEverything() {
  ctx.clearRect(0,0,500,500);
   drawGrid();
  treasure.draw(ctx);
  character.draw(ctx);
  window.requestAnimationFrame(drawEverything);
}

document.addEventListener('keydown', function (event) {
  event.preventDefault();
  switch (event.keyCode) {
    case 37: 
    character.moveLeft();
    break;
    case 38: 
    character.moveUp();
    break;
    case 39: 
    character.moveRight();
    break;
    case 40: 
    character.moveDown();
    break;
  }
  checkBoth();
}); 

function checkBoth() {
  if (character.row === treasure.row && character.col === treasure.col) {
  treasure.setRandomPosition();
  }   
}

drawEverything();