// main.js
var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height

// Iteration 1
function drawGrid() {
  // TODO: write the code of the function
  

  for (let i = 0; i < 11; i++) {
      ctx.beginPath();
      ctx.moveTo(i * (width/10), 0);
      ctx.lineTo(i * (width/10), height);
      ctx.stroke();
  }

  for (let i = 0; i < 11; i++) {
      ctx.beginPath();
      ctx.moveTo(0, i * (height/10));
      ctx.lineTo(width, i * (height/10));
      ctx.stroke();
  }
  
}

class Character {
  constructor(col, row){
    this.col = col;
    this.row = row;
  }

  moveUp(){
    this.row-=50;
  }
  moveRight(){
    this.col+=50;
  }
  moveLeft(){
    this.col-=50;
  }
  moveDown(){
    this.row+=50;
  }
}

let player = new Character(0,0) // (0,0) = Initial position
//player.moveDown() // Increase by 1 the value of player.row
//player.moveDown() // Increase by 1 the value of player.row
//player.moveRight() // Increase by 1 the value of player.col
console.log(player.col, player.row) // => 1,2



let down ='images/character-down.png';
let up = 'images/character-up.png';
let right = 'images/character-right.png';
let left = 'images/character-left.png';


function drawPlayer(dir){
  let img = new Image();
  img.src = dir;
  img.onload = function() {
    ctx.drawImage(img, player.col, player.row, 48, 48);
  };
}


class Treasure {
  constructor(col, row){
    this.col = col;
    this.row = row;
  }
  setRandomPosition(){
    this.col = Math.floor(Math.random()*9.5)*50;
    this.row = Math.floor(Math.random()*9.5)*50;
  }

}

let treasure = new Treasure(0,0);
treasure.setRandomPosition();
console.log(treasure.col + " , " + treasure.row)

function drawTreasure(){
  let img = new Image();
  img.src = 'images/treasure.png';

  img.onload = function() {
    ctx.drawImage(img, treasure.col, treasure.row, 48,48);
  };
}

function clearSpace(){
  ctx.clearRect(2+player.col, 2+player.row, 46, 46);
}

function isItWon(){
  if(treasure.col === player.col && treasure.row === player.row){
    console.log("Won!")
    //ctx.rect(2+treasure.col, 2+treasure.row, 46, 46);
    //ctx.fillStyle = "tomato";
    //ctx.fill();
    treasure.setRandomPosition();
    drawTreasure();
  }
}


document.onkeydown = function(e) {
  e.preventDefault() // Stop the default behavior (moving the screen to the left/up/right/down)
  switch (e.keyCode) {
    case 37: 
      console.log('left')
      clearSpace();
      player.moveLeft();
      isItWon();
      drawPlayer(left);
      break
    case 38: 
      console.log('up')
      clearSpace();
      player.moveUp();
      isItWon();
      drawPlayer(up);  
      break
    case 39: 
      console.log('right')
      clearSpace();
      player.moveRight();
      isItWon();
      drawPlayer(right);
      break
    case 40: 
      console.log('down')
      clearSpace();
      player.moveDown();
      isItWon();
      drawPlayer(down);
      break
  }
}




function drawEverything() {
  drawGrid()
  drawPlayer(down)
  drawTreasure()
}

drawEverything();