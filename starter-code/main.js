// main.js
var canvas = document.querySelector('canvas')
var c = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height
let player = new Character(0, 0);
let randomCol = Math.floor(Math.random()*10)*50;
let randomRow = Math.floor(Math.random()*10)*50;
let treasure = new Treasure(randomCol, randomRow)


window.addEventListener("load", function() {
  drawEverything()
})

// Iteration 1
function drawGrid() {
  // TODO: write the code of the function
  c.lineWidth = 3;
 for (x = 0; x < 550; x+= 50) {
    c.strokeRect(0, 0, x, 50);
    for (y = 0; y < 550; y+= 50) {
        c.strokeRect(0, 0, x, y);
        }
    }
}

function drawEverything() {
  drawGrid()
  player.drawPlayer(c)
  
  // drawTreasure()
  treasure.drawTreasure(c)
}




