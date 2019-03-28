// main.js
var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height


var NB_OF_TILES = 10
var TILE_SIZE = width / NB_OF_TILES

// Iteration 1

function drawEverything() { }

    function drawGrid() {
        // TODO: write the code of the function
      
        // Vertical lines
        let x=0;
        let y=0;
      
      for(let i=1 ; i<=NB_OF_TILES ; i++){
          x += width/NB_OF_TILES;
          ctx.beginPath()
          ctx.moveTo(x, 0)
          ctx.lineTo(x, 500)
          ctx.closePath()
          ctx.stroke()
      }
      // Horizontal lines
      for(let i=1 ; i<=NB_OF_TILES ; i++){
          y += height/NB_OF_TILES;
          ctx.beginPath()
          ctx.moveTo(0, y)
          ctx.lineTo(500, y)
          ctx.closePath()
          ctx.stroke()
      }
      }

    drawGrid();
   


class Character {

    // The constructor is the method triggered with the `new` keyword 
    constructor(col,row) {
      this.col = 0; //y
      this.row = 0; //x
      this.direction = "Up"
      this.score=0;
    }
    
    /* // Method move */
    moveUp() {
        this.row =Math.max(this.row-1,0)
        this.direction = "Up"
        // if (this.row === 0){
        //      this.row ===0}
      }

    moveDown() { 
        // this.row += 1;
        this.row =Math.min(this.row+1,9)
        this.direction = "Down"

    }
    
    moveRight() {
        this.col =Math.min(this.col+1,9)
        this.direction = "Right"
     }

    moveLeft(){
      this.col =Math.max(this.col-1,0)
        this.direction = "Left"
    }

 }


var player = new Character(0,0)
var player2 = new Character(0,9)

// (0,0) = Initial position
// player.moveDown() // Increase by 1 the value of player.row
// player.moveDown() // Increase by 1 the value of player.row
// player.moveRight() // Increase by 1 the value of player.col
// console.log(player.col, player.row) // => 1,2
  
function drawPlayer(){
  // let player = new Character(0,0)

  // switch (player.direction) {
  //   case 'Left': playerImg.src = "./images/character-left.png";  break;
  //   case 'Up': playerImg.src = "./images/character-up.png";    break;
  //   case 'Right': playerImg.src = "./images/character-right.png"; break;
  //   case 'Down': playerImg.src = "./images/character-down.png";  break;
  // }

  playerImg = new Image
  playerImg.src = "./images/character-down.png"
  playerImg.onload = function() {
      ctx.drawImage(playerImg, player.col*TILE_SIZE,player.row*TILE_SIZE ,50,50 )
    }
  }

  drawPlayer()

// drawTreasure()


class Treasure{

    // The constructor is the method triggered with the `new` keyword 
    constructor(col,row) {
      this.col = col; //y
      this.row = row; //x
    }
    
    /* // Method move */
    setRandomPosition() {
        
       let randomNumberCol= Math.floor(Math.random()*10)
       let randomNumberRow= Math.floor(Math.random()*10)

    //    console.log(randomNumberCol)
    //    console.log(randomNumberRow)
    //    console.log('lol')
       this.col = randomNumberCol
       this.row = randomNumberRow

       //return {col: this.col, row: this.row}
      }
 }
 

 function drawTreasure(){
    let treasureImg = new Image()


    treasureImg.src = "./images/treasure.png"
    treasureImg.onload = function() {
        //ctx.drawImage(treasureImg, treasure.col*TILE_SIZE,treasure.row*TILE_SIZE ,50,50 )
        ctx.drawImage(treasureImg,treasure.col*50,treasure.row*50,50,50)
      }
 }
 
 var treasure = new Treasure(5,9) // (0,0) = Initial position
 treasure.setRandomPosition() // 
 treasure.setRandomPosition() // 
//  console.log(treasure.col, treasure.row) // => 1,2

//  var treasure = new Treasure(randomNumberCol*50,randomNumberRow*50) // (0,0) = Initial position

 drawTreasure()

 function drawEverything(){
    ctx.clearRect(0,0,width,height)
    drawGrid()
    drawTreasure()
    drawPlayer()
    drawScores ()
  }

  
  function updateEverything(keyCode) {
    switch (keyCode) {
      case 37: player.moveLeft();  break;
      case 38: player.moveUp();    break;
      case 39: player.moveRight(); break;
      case 40: player.moveDown();  break;
    }
  
    // Check if the user is on the treasure
    if (player.row === treasure.row && player.col === treasure.col) {
      treasure.setRandomPosition()
      player.score++
    }
  }
  
  // The first drawEverything is triggered after 500ms, to be sure that all pictures are loaded
  setTimeout(()=> {
    drawEverything()
  }, 500)
  
  
  document.onkeydown = function(e) {
    e.preventDefault() // Stop the default behavior (moving the screen to the left/up/right/down)
  
    // 1st part: Update player and treasure
    updateEverything(e.keyCode)
  
    // 2nd part: draw everything
    drawEverything()
  }

  const scoreHTML = document.getElementById("score");

  function drawScores (){
    scoreHTML.innerHTML = `${player.score}`;
  }



//   // Iteration 6
// Do what you want to make this game awesome!

// Here are some ideas:

// Add a property direction to the player and display a different image based on the direction
// Add another player that can be controlled with different keys (WASD)
// Add a score property to the player and create a function drawScores