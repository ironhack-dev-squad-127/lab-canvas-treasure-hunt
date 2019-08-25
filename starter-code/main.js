// main.js

var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height



// Iteration 1
function drawGrid() {
  for (var i = 0; i < 11; i++) {
    ctx.beginPath();
    ctx.moveTo(0, i * 50);
    ctx.lineTo(500, i * 50, );
    ctx.stroke();
  }
  for (var i = 0; i < 11; i++) {
    ctx.beginPath();
    ctx.moveTo(i * 50, 0);
    ctx.lineTo(i * 50, 500);
    ctx.stroke();
  }
}


class Character {
  constructor(colArg, rowArg) {
    this.col = colArg;
    this.row = rowArg;
    this.direction = 'down';
    this.image = new Image();
    this.image.src = `images/character-${this.direction}.png`;
  }

  draw(ctx) {
    ctx.drawImage(this.image, player.col * 50, player.row * 50, this.image.width, this.image.width);

  }

  moveUp() {
    this.row -= 1
    this.direction = 'up';
  }
  moveDown() {
    this.row += 1;
    this.direction = 'down';
  }
  moveRight() {
    this.col += 1;
    this.direction = 'right';
  }
  moveLeft() {
    this.col -= 1;
    this.direction = 'left';
  }
}

class Treasure {
  constructor() {
    this.col = 0;
    this.row = 0;
  }

  setRandomPosition() {
    this.col = (Math.floor(Math.random() * 10));
    this.row = (Math.floor(Math.random() * 10));
  }
}

const player = new Character(0, 0);
//const player2 = new Character (5,5)
const treasure = new Treasure();

function drawTreasure(treasure) {
  const image = new Image();
  image.src = 'images/treasure.png';


  ctx.drawImage(image, treasure.col * 50, treasure.row * 50, 50, 50);
};


function drawEverything() {
  ctx.clearRect(0, 0, 1000, 1000);
  drawGrid()
  player.draw(ctx)
  drawTreasure(treasure);
  if (player.col === treasure.col && player.row === treasure.row) {
    treasure.setRandomPosition()
  }
  window.requestAnimationFrame(drawEverything)
}

document.addEventListener("keydown", function (event) {
  event.preventDefault();
  const key = event.key;
  switch (key) {
    case 'ArrowDown':
      player.moveDown();
      drawEverything();
      break;
    case 'ArrowUp':
      player.moveUp();
      drawEverything();
      break;
    case 'ArrowRight':
      player.moveRight();
      drawEverything();
      break;
    case 'ArrowLeft':
      player.moveLeft();
      drawEverything();
      break;
  }
})

drawEverything()