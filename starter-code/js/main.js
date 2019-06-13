
let game = new Game();
let player = new Player(5, 5);
let treasure = new Treasure();
let dragon = new Dragon(0, 9);


var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;


// Iteration 1 - Draw a 10 * 10 Grid to the Screen
function drawGrid() {
  ctx.lineWidth = 1; // Change the border width of lines

  // Draw the vertical lines
  for (var x = 0; x <= height; x += 50) {
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }

  // Draw the horizontal lines
  for (var y = 0; y <= width; y += 50) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
}

function drawCharacter(character) {
  let xPositionOnGrid = 0 + character.colX * 50;
  let yPositionOnGrid = 0 + character.rowY * 50;

  if (character.direction === "Up") {
    ctx.drawImage(character.imgUp, xPositionOnGrid, yPositionOnGrid, 50, 50);
  }
  if (character.direction === "Down") {
    if (character.imgDown.complete) {
      ctx.drawImage(
        character.imgDown,
        xPositionOnGrid,
        yPositionOnGrid,
        50,
        50
      );
    } else {
      character.imgDown.onload = () => {
        ctx.drawImage(
          character.imgDown,
          xPositionOnGrid,
          yPositionOnGrid,
          50,
          50
        );
      };
    }
  }
  if (character.direction === "Left") {
    ctx.drawImage(character.imgLeft, xPositionOnGrid, yPositionOnGrid, 50, 50);
  }
  if (character.direction === "Right") {
    ctx.drawImage(character.imgRight, xPositionOnGrid, yPositionOnGrid, 50, 50);
  }
}

function drawTreasure() {
  let xPositionOnGrid = 0 + treasure.colX * 50;
  let yPositionOnGrid = 0 + treasure.rowY * 50;

  if (treasure.imgTreasure.complete) {
    ctx.drawImage(treasure.imgTreasure, xPositionOnGrid, yPositionOnGrid, 50, 50);
  } else {
    treasure.imgTreasure.onload = () => {
      ctx.drawImage(treasure.imgTreasure, xPositionOnGrid, yPositionOnGrid, 50, 50);
    };
  }
}

function checkCollisions() {
  if (treasure.colX == player.colX && treasure.rowY == player.rowY) {
    game.points++;
    treasure.placeRandomly();
    drawTreasure();
  }

  if (player.colX == dragon.colX && player.rowY == dragon.rowY) {
    game.lives--;
    dragon.placeRandomly();
    drawCharacter(dragon);
  }
  if (treasure.colX == dragon.colX && treasure.rowY == dragon.rowY) {
    dragon.placeRandomly();
    drawCharacter(dragon);
  }
}

function drawEverything() {
  ctx.clearRect(0, 0, width, height);
  drawGrid();
  drawCharacter(player);
  drawCharacter(dragon);
  drawTreasure();
  checkCollisions();
  drawTreasure();
  updateScoreBoard();
  updateLives();
  game.checkLives();
  game.checkState();
}

let $scoreBoard = document.querySelector(".score-board");

function updateScoreBoard() {
  $scoreBoard.innerText = game.points;
}

let $livesLeft = document.querySelector(".lives-left");

function updateLives() {
  $livesLeft.innerText = "";
  for (let l = 0; l < game.lives ; l++) {
    $livesLeft.innerHTML += '<i class="fas fa-beer"></i>';
  }
}

drawEverything();
