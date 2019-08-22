// main.js
var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height



// Iteration 1
function drawGrid() {
    ctx.lineWidth = 3;
    for(let i = 0; i <= height; i+=50){
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height)
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(width, i)
        ctx.stroke();
        ctx.closePath();
    }    
}

class Character {
    constructor (col, row, direction) {
        this.col = col;
        this.row = row;
        this.direction = direction;
        this.moveUp = function(){
            if(this.col>0){
            this.col -= 1
            this.direction = 'images/character-up.png'
            }
        }
        this.moveRight = function(){
            if(this.row<9){
            this.row += 1
            this.direction = 'images/character-right.png'
            }
        }
        this.moveDown = function(){
            if(this.col<9){
            this.col += 1
            this.direction = 'images/character-down.png'
            }
        }
        this.moveLeft = function(){
            if(this.row >= 1){
            this.row -= 1
            this.direction = 'images/character-left.png'
            }
        }
    }
}    

let player = new Character(0, 0, 'images/character-down.png');
let player2 = new Character(0, 10);

function drawPlayer(){
    let position = [player.row * 50, player.col * 50]
    const imagePlayer = new Image();
    imagePlayer.src = player.direction;

    imagePlayer.addEventListener('load', function () { 
      const imageWidth = imagePlayer.width;
      const imageHeight = imagePlayer.height;
      const pattern = ctx.createPattern(imagePlayer, 'repeat');
  
      ctx.drawImage(imagePlayer, position[0], position[1], imageWidth, imageHeight);
    });
  
}

class Treasure {
    constructor (col, row) {
        this.col = col;
        this.row = row;  
    }
}    

const treasureItem = new Treasure(6,5);

function drawTreasure (){
    if(treasureItem.row === player.row && treasureItem.col === player.col){
        treasureItem.row = Math.floor(Math.random() * Math.floor(10));
        treasureItem.col = Math.floor(Math.random() * Math.floor(10));
    }

    let position = [treasureItem.row * 50, treasureItem.col * 50]

    const image = new Image();
    image.src = 'images/treasure.png';
  
    image.addEventListener('load', function () {
        const imageWidth = image.width/4.5;
        const imageHeight = image.height/4.5;
  
    ctx.drawImage(image, position[0], position[1], imageWidth, imageHeight);
    });
}


document.onkeydown = function(e) { 
    e.preventDefault() 
    switch (e.keyCode) {
      case 37: 
        player.moveLeft()
        break
      case 38: 
        player.moveUp()
        break
      case 39: 
        player.moveRight()
        break
      case 40: 
        player.moveDown()
        break
    }
    drawEverything()
  }

function drawEverything() {
  ctx.clearRect(0, 0, 500, 500);
  drawGrid()
  drawPlayer()
  drawTreasure()
}

drawEverything()