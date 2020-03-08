// main.js

const $canvas = document.querySelector("#myCanvas");
const context = $canvas.getContext("2d");
const width = $canvas.width;
const height = $canvas.height;

const $canvasScores = document.querySelector("#scores");
const contextScores = $canvasScores.getContext("2d");
console.log(contextScores);

class Character {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.image = new Image();
    this.image.onload=imageOnLoad;
    this.image.src = "images/character-down.png";
    this.image.alt = "P";
    this.score = 0;
  }
  moveUp() {
    if (this.y > 0) {
      this.y -= 50;
      this.image.src = "images/character-up.png";
      return this.y;
    }
  }
  moveRight() {
    if (this.x < 450) {
      this.x += 50;
      this.image.src = "images/character-right.png";
      return this.x;
    }
  }
  moveDown() {
    if (this.y < 450) {
      this.y += 50;
      this.image.src = "images/character-down.png";
      return this.y;
    }
  }
  moveLeft() {
    if (this.x > 0) {
      this.x -= 50;
      this.image.src = "images/character-left.png";
      return this.x;
    }
  }
  draw() {
    context.drawImage(this.image, this.x, this.y, 49, 49);
  }
  erase() {
    context.clearRect(this.x, this.y, 49, 49);
  }
}

function imageOnLoad(){
  drawEverything();
}

class Treasure {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.image = new Image();
    this.image.onload = imageOnLoad;
    this.image.src = "images/treasure.png";
    this.image.alt = "T";
  }
  setRandomPosition() {
    const max = 500 / 50;
    this.x = 50 * Math.floor(Math.random() * max);
    this.y = 50 * Math.floor(Math.random() * max);

    return this.x, this.y;
  }

  draw() {
    context.drawImage(this.image, this.x, this.y, 50, 50);
  }
}

let player = new Character(0, 0);
let player2 = new Character(450, 450);
let treasure = new Treasure();
treasure.setRandomPosition();

// Iteration 1
function drawGrid() {
  // TODO: write the code of the function
  // let arrayGrid = [];
  for (let x = 0; x < width; x = x + width / 10) {
    for (let y = 0; y < height; y = y + height / 10) {
      context.strokeRect(x, y, $canvas.width / 10, $canvas.height / 10);
      // arrayGrid.push({
      //   x: x / 50,
      //   y: y / 50
      // });
    }
  }
  // return arrayGrid;
}

function drawPlayer() {
  player.draw();
  player2.draw();
}

function drawTreasure() {
  treasure.draw();
}

function drawScores() {
  contextScores.clearRect(0, 0, $canvasScores.width, $canvasScores.height);
  contextScores.fillStyle = "red";
  contextScores.font = "25px monospace";
  contextScores.fillText(`Player1 score: ${player.score}`, 140, 40);

  contextScores.fillStyle = "green";
  contextScores.font = "25px monospace";
  contextScores.fillText(`Player2 score: ${player2.score}`, 140, 80);
}

function drawEverything() {
  drawGrid();
  drawPlayer();
  drawTreasure();
  drawScores();
  endGameCheck();
}

function wasTreasureFound() {
  if (player.x === treasure.x && player.y === treasure.y) {
    context.clearRect(treasure.x, treasure.y, 50, 50);
    player.score++;
    treasure.setRandomPosition();
  }

  if (player2.x === treasure.x && player2.y === treasure.y) {
    context.clearRect(treasure.x, treasure.y, 50, 50);
    player2.score++;
    treasure.setRandomPosition();
  }
}

function newGame() {
  document.onkeydown = function(e) {
    e.preventDefault();
    if (e.keyCode) {
      location.reload();
    }
  };
}

function endGameCheck() {
  if (player.score === 5) {
    context.clearRect(0, 0, width, height);
    context.fillStyle = "red";
    context.font = "25px monospace";
    context.fillText(`Player1 won the game!`, 100, 250);

    newGame();
  } else if (player2.score === 5) {
    context.clearRect(0, 0, width, height);
    context.fillStyle = "green";
    context.font = "25px monospace";
    context.fillText(`Player2 won the game!`, 100, 250);

    newGame();
  }
}


document.onkeydown = function(e) {
  e.preventDefault(); // Stop the default behavior (moving the screen to the left/up/right/down)

  switch (e.keyCode) {
    //player 1 keys
    case 37:
      player.erase();
      player.moveLeft();
      wasTreasureFound();
      if (player.x === player2.x && player.y === player2.y) {
        player.moveRight();
      }
      drawEverything();
      console.log(player);
      console.log("left");
      break;
    case 38:
      player.erase();
      player.moveUp();
      wasTreasureFound();
      if (player.x === player2.x && player.y === player2.y) {
        player.moveDown();
      }
      drawEverything();
      console.log(player);
      console.log("up");
      break;
    case 39:
      player.erase();
      player.moveRight();
      wasTreasureFound();
      if (player.x === player2.x && player.y === player2.y) {
        player.moveLeft();
      }
      drawEverything();
      console.log(player);
      console.log("right");
      break;
    case 40:
      player.erase();
      player.moveDown();
      wasTreasureFound();
      if (player.x === player2.x && player.y === player2.y) {
        player.moveUp();
      }
      drawEverything();
      console.log(player);
      console.log("down");
      break;

    //player 2 keys

    case 65:
      player2.erase();
      player2.moveLeft();
      wasTreasureFound();
      if (player2.x === player.x && player2.y === player.y) {
        player2.moveRight();
      }
      drawEverything();
      console.log(player);
      console.log("left");
      break;
    case 87:
      player2.erase();
      player2.moveUp();
      wasTreasureFound();
      if (player2.x === player.x && player2.y === player.y) {
        player2.moveDown();
      }
      drawEverything();
      console.log(player2);
      console.log("up");
      break;
    case 68:
      player2.erase();
      player2.moveRight();
      wasTreasureFound();
      if (player2.x === player.x && player2.y === player.y) {
        player2.moveLeft();
      }
      drawEverything();
      console.log(player2);
      console.log("right");
      break;
    case 83:
      player2.erase();
      player2.moveDown();
      wasTreasureFound();
      if (player.x === player2.x && player.y === player2.y) {
        player2.moveUp();
      }
      drawEverything();
      console.log(player2);
      console.log("down");
      break;
  }
};
