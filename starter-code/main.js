// main.js
var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var width = canvas.width;
var height = canvas.height;
const rowMovement = height/10;
const colMovement = width/10;
// Iteration 1

function drawGrid() {
    for(let x=0; x <= width; x += width/10) {
        ctx.beginPath();
        ctx.moveTo(x,0);
        ctx.lineTo(x,height);
        ctx.stroke();
    };
    
    for(let y=0; y <= height; y += height/10) {
        ctx.beginPath();
        ctx.moveTo(0,y);
        ctx.lineTo(width,y);
        ctx.stroke();
    }   
}

class Character {
    constructor(row, col) {
        this.row = row;    
        this.col = col;
    }
    
    moveUp() {
        this.row === 0 ? this.row: this.row -= rowMovement ;
        return this.row;
    }

    moveDown() {
        this.row === height - height/10 ? this.row : this.row += rowMovement;
        return this.row;
    }
    
    moveLeft() {
        this.col === 0 ? this.col : this.col -= colMovement;
        return this.col;
    }

    moveRight() {
        this.col === width - width/10 ? this.col : this.col += colMovement;
    }
};

const player = new Character(0,0);

const drawPlayer = () => {
    
    const imageDown = new Image();
    imageDown.src = "./images/character-down.png";

    const imageUp = new Image();
    imageUp.src = "./images/character-up.png";

    const imageLeft = new Image();
    imageLeft.src = "./images/character-left.png";

    const imageRight = new Image();
    imageRight.src = "./images/character-right.png";

    imageDown.addEventListener('load', function () {
    
        ctx.drawImage(imageDown, player.row, player.col ,imageDown.width , imageDown.height);
    });
}
drawPlayer(player); 




class Treasure {
  constructor(row, col) {
      this.row = row;    
      this.col = col;
  } 
  setRandomPosition(){
    this.col = Math.floor(Math.random()*10)*width/10;
    this.row = Math.floor(Math.random()*10)*height/10;
  }
 
};

const treasure = new Treasure(Math.floor(Math.random()*10)*width/10, Math.floor(Math.random()*10)*height/10);

const drawTreasure = () => {
    
    const treasureImage = new Image();
    treasureImage.src = "./images/treasure.png";

    treasureImage.addEventListener('load', function () {
        ctx.drawImage(treasureImage, treasure.row, treasure.col ,width/10 ,height/10);
    });
}
drawTreasure(); 


document.onkeydown = function(e) {
    e.preventDefault() // Stop the default behavior (moving the screen to the left/up/right/down)
    switch (e.keyCode) {
      case 37: 
        player.moveleft
        break
      case 38: 
        console.log(player.moveUp)  
        break
      case 39: 
        player.moveRight
        break
      case 40: 
        console.log(player.moveDown)
        break
    }
  }



// function drawEverything() {
//   drawGrid(),
//   drawPlayer(),
//   drawTreasure(),
//   context.clearRect(0, 0, width, height);
// }
// drawEverything()
