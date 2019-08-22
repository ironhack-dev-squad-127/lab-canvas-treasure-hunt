// main.js
var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height

const numberOfRows = 10;
const numberOfColumns = 10;

// Iteration 1
function drawGrid() {
  // TODO: write the code of the function
  // Clear canvas
  ctx.clearRect(0,0,width, height);

  // Draw vertical lines on columns at 0, 50, 100, ... 450, 500
  for (let x=0; x<=width; x+=width/numberOfColumns) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x,height);
    ctx.stroke();
    ctx.closePath();
  }

  // Draw horizontal lines on rows at 0, 50, ... 450, 500
  for (let y=0; y<=height; y+=height/numberOfRows) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width,y);
    ctx.stroke();
    ctx.closePath();
  }
}

// Iteration 3
// function drawPlayer(player) {
//   let row = player.row;
//   let col = player.col;

//   playerImg = new Image();

//   let dir = player.direction;
//   switch (dir) {
//     case 'up':
//       playerImg.src = 'images/character-up.png';
//       break;
//     case 'down':
//       playerImg.src = 'images/character-down.png';
//       break;
//     case 'left':
//       playerImg.src = 'images/character-left.png';
//       break;
//     case 'right':
//       playerImg.src = 'images/character-right.png';
//       break;
//   }

//   let dx = col*width/numberOfColumns;
//   let dy = row*height/numberOfRows;
//   let dwidth = width/numberOfColumns;
//   let dheight = height/numberOfRows;

//   playerImg.addEventListener('load', event => {
//     ctx.drawImage(playerImg, dx, dy, dwidth, dheight);
//   }) 
// }

// Iteration 4
function drawTreasure(treasure) {
  let row = treasure.row;
  let col = treasure.col;
  treasureImg = new Image();
  treasureImg.src = 'images/treasure.png';
  let dx = col*width/numberOfColumns;
  let dy = row*height/numberOfRows;
  let dwidth = width/numberOfColumns;
  let dheight = height/numberOfRows;
  treasureImg.addEventListener('load', event => {
    ctx.drawImage(treasureImg, dx, dy, dwidth, dheight);
  }) 
}



function drawEverything(player, treasure) {
  drawGrid();
  player.draw(ctx, numberOfRows, numberOfColumns);
  drawTreasure(treasure);
}

const player = new Character();
const treasure = new Treasure();
treasure.setRandomPosition(numberOfRows, numberOfColumns);
drawEverything(player, treasure);


// Iteration 5
// Add keypress event listeners
document.addEventListener('keydown', (e) => keypress(e, player, treasure));


function keypress(event, player, treasure) {
  event.preventDefault() // Stop the default behavior (moving the screen to the left/up/right/down)
  switch (event.keyCode) {
    case 37:
      console.log('moving left once');
      player.moveLeft();
      break;
    case 38:
      console.log('moving up once');
      player.moveUp(); 
      break;
    case 39:
      console.log('moving right once');
      player.moveRight();
      break;
    case 40:
      console.log('moving down once');
      player.moveDown();
      break;
  }

  // Iteration 6:
  // If player and treasure are occupying the same cell, move the treasure
  if (player.col === treasure.col && player.row === treasure.row) {
    console.log('TREASURE FOUND');
    treasure.setRandomPosition(numberOfRows, numberOfColumns);
  }
  drawEverything(player, treasure);
}