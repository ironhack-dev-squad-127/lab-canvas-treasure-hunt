// main.js
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;

//Player Class
class Character {
  constructor(x, y) {
    this.col = x;
    this.row = y;
    this.score = 0;
    this.direction = 'D';
  }

  updateScore() {
    this.score++;
  }

  moveDown() {
    console.log(this.row, height);
    if (this.row < height - height / 10) {
      ctx.clearRect(player.col, player.row, 50, 50);
      drawGrid();
      this.row = this.row + 50;
    }
  }

  moveUp() {
    if (this.row > 0) {
      ctx.clearRect(player.col, player.row, 50, 50);
      drawGrid();
      this.row = this.row - 50;
    }
  }

  moveRight() {
    if (this.col < width - width / 10) {
      ctx.clearRect(player.col, player.row, 50, 50);
      drawGrid();
      this.col = this.col + 50;
    }
  }

  moveLeft() {
    if (this.col > 0) {
      ctx.clearRect(player.col, player.row, 50, 50);
      drawGrid();
      this.col = this.col - 50;
    }
  }
}

class Treasure {
  constructor() {
    this.col;
    this.row;
  }

  setRandomPosition() {
    this.col = Math.floor(Math.random() * 10) * (width / 10);
    this.row = Math.floor(Math.random() * 10) * (height / 10);
  }
}

// Iteration 1
function drawGrid() {
  // TODO: write the code of the function
  ctx.strokeStyle = "black";

  for (let x = 50; x <= canvas.width; x = x + 50) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.moveTo(0, x);
    ctx.lineTo(width, x);
    ctx.closePath();
    ctx.stroke();
  }
}

function drawPlayer() {
  let img = new Image();
  img.src = "starter-code/images/character-down.png";
  

  switch (player.direction) {
      case 'D':
        img.onload = function() {
        ctx.drawImage(img, player.col, player.row, 50, 50);
        };
          break;
          

  
      default:
          break;
  }


}

function drawTreasure() {
  let img = new Image();
  img.src = "starter-code/images/treasure.png";
  img.onload = function() {
    ctx.drawImage(img, treasure.col, treasure.row, 50, 50);
  };
}

function drawScores() {
  let scoreText = document.querySelector("h1");
  scoreText.innerText = `Score: ${player.score} points`;
}

function drawEverything() {
  drawGrid();
  drawPlayer();
  drawTreasure();
  drawScores();
}

document.onkeydown = function(e) {
  e.preventDefault(); // Stop the default behavior (moving the screen to the left/up/right/down)
  switch (e.keyCode) {
    case 37:
      player.moveLeft();
      break;
    case 38:
      player.moveUp();
      break;
    case 39:
      player.moveRight();
      break;
    case 40:
      player.moveDown();
      break;
  }

  drawPlayer();

  if (player.row === treasure.row && player.col === treasure.col) {
    player.updateScore();
    ctx.clearRect(player.col, player.row, 50, 50);
    treasure.setRandomPosition();
    drawEverything();
  }
};

var player = new Character(0, 0); // (0,0) = Initial position
player.moveDown(); // Increase by 1 the value of player.row
player.moveDown(); // Increase by 1 the value of player.row
player.moveRight(); // Increase by 1 the value of player.col
let treasure = new Treasure();
treasure.setRandomPosition();

drawEverything();
