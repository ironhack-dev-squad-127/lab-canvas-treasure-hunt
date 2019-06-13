var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;
var score = document.querySelector("p");
var score2 = document.querySelector(".p2");

// --New player---
var player1 = new Character(0, 0);

// --New player---
var player2 = new Character(9, 9);

//---New treasure--
var treasure = new Treasure(
  Math.floor((Math.random() * width) / 50),
  Math.floor((Math.random() * height) / 50)
);

// Iteration 1
function drawGrid(x, y) {
  for (let x = 0; x <= width; x += 50) {
    for (let y = 0; y < height; y += 50) {
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 2]);
      ctx.strokeRect(x, y, 50, 50);
      ctx.fillStyle = "white";
      ctx.fillRect(x, y, 50, 50);
    }
  }
}

function drawScore() {
  score.innerText = player1.score;
  score2.innerText = player2.score;
}

function drawEverything() {
  drawGrid();
  drawPlayer();
  drawTreasure();
  drawScore();
}

drawEverything();

// --Draw player1---
function drawPlayer() {
  let p1 = new Image();
  p1.src = "images/character-down.png";
  if (p1.complete) {
    ctx.drawImage(p1, player1.col * 50, player1.row * 50, 50, 50);
  } else {
    p1.onload = () => {
      ctx.drawImage(p1, player1.col * 50, player1.row * 50, 50, 50);
    };
  }

  let p2 = new Image();
  p2.src = "images/3-PHOTOGRAPH.jpg";
  if (p2.complete) {
    ctx.drawImage(p2, player2.col * 50, player2.row * 50, 50, 50);
  } else {
    p2.onload = () => {
      ctx.drawImage(p2, player2.col * 50, player2.row * 50, 50, 50);
    };
  }
}

//---Draw treasure--
function drawTreasure() {
  let img = new Image();
  img.src = "images/treasure.png";

  if (img.complete) {
    ctx.drawImage(img, treasure.col * 50, treasure.row * 50, 50, 50);
  } else {
    img.onload = () => {
      ctx.drawImage(img, treasure.col * 50, treasure.row * 50, 50, 50);
    };
  }
}

//---ITERATION 5 ---
document.onkeydown = function(e) {
  e.preventDefault(); // Stop the default behavior (moving the screen to the left/up/right/down)
  switch (e.keyCode) {
    case 37:
      player1.moveLeft();
      drawEverything();
      console.log("left");
      break;
    case 38:
      player1.moveUp();
      drawEverything();
      console.log("up");
      break;
    case 39:
      player1.moveRight();
      drawEverything();
      console.log("right");
      break;
    case 40:
      player1.moveDown();
      drawEverything();
      console.log("down");
      break;
    case 65:
      player2.moveLeft();
      drawEverything();
      console.log("left");
      break;
    case 87:
      player2.moveUp();
      drawEverything();
      console.log("up");
      break;
    case 68:
      player2.moveRight();
      drawEverything();
      console.log("right");
      break;
    case 83:
      player2.moveDown();
      drawEverything();
      console.log("down");
      break;
  }
  if (player1.col === treasure.col && player1.row === treasure.row) {
    treasure.setRandomPosition();
    player1.score += 50;
    drawEverything();
    console.log("treasure found!");
  }
  if (player2.col === treasure.col && player2.row === treasure.row) {
    treasure.setRandomPosition();
    player2.score += 50;
    drawEverything();
    console.log("treasure found!");
  }
};
