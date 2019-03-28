// main.js
var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height


// Iteration 1
function drawGrid(x,y) {
    for (x = 0; x < width; x+=50){
        ctx.beginPath()
        ctx.moveTo(x,0)
        ctx.lineTo(x, height)
        ctx.stroke()
    }
    for (y = 0; y < width; y+=50){
        ctx.beginPath()
        ctx.moveTo(0,y)
        ctx.lineTo(width, y)
        ctx.stroke()
    }
}

class Character {
    constructor(col, row, direction){
        this.col = col
        this.row = row
        this.direction = direction
    }
    
    moveUp(){
        if(this.row > 0){   
        this.row--
        }
    }
    moveRight(){
        if(this.col < 9){   
        this.col++
        }
    }
    moveDown(){
        if(this.row < 9){   
        this.row++
        }
    }
    moveLeft(){
        if(this.col > 0){
        this.col--
        }
    }
}

function drawPlayer(source){
    let playerImg = new Image()
    playerImg.src = source
    playerImg.onload = function() {
        ctx.drawImage(playerImg, player.col*50, player.row*50,50,50)
    }
    
}

let player = new Character(0,0)

class Treasure {
    constructor(col, row){
        this.col = col
        this.row = row
    }
    setRandomPosition(){
        this.col = Math.floor(Math.random() *10)   
        this.row = Math.floor(Math.random() *10)
    }
}

function drawTreasure(){
    let treasureImg = new Image()
    treasureImg.src = "./images/treasure.png"
    treasureImg.onload = function() {
        if (player.row == treasure.row && player.col == treasure.col) {
            treasure.setRandomPosition()
        }else {

        }
    ctx.drawImage(treasureImg, treasure.col*50,treasure.row*50,50,50)
    }
}

let treasure = new Treasure(9,9)


function drawEverything(direction) {
  drawGrid()
  if(direction === 'left'){
    drawPlayer('./images/character-left.png')
  }
  if(direction === 'down'){
    drawPlayer('./images/character-down.png')
  } 
  if(direction === 'right'){
    drawPlayer('./images/character-right.png')
  }
  if(direction === 'up'){
    drawPlayer('./images/character-up.png')
  } 
  drawTreasure()
}

drawEverything('down')


document.onkeydown = function(e) {
    e.preventDefault()
    switch (e.keyCode) {
      case 37: 
        player.moveLeft()
        drawEverything('left')
        break
      case 38: 
        player.moveUp()
        drawEverything("up")  
        break
      case 39: 
        player.moveRight()
        drawEverything("right")
        break
      case 40: 
        player.moveDown()
        drawEverything("down")
        break
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawEverything()
    
  }