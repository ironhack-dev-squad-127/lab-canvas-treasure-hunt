// main.js
var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height
var player = new Character(0,0);
var treasure = new Treasure(0,0);

// Iteration 1

function drawGrid() {
  for ( let i= 0; i < height ; i += 50) {
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, height);
    ctx.stroke();
    ctx.closePath();

    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(width, i);
    ctx.stroke();
    ctx.closePath();

}}

function drawEverything() {
  ctx.clearRect(0, 0, width, height)
  drawGrid() 
  player.drawPlayer(ctx)
  treasure.drawTreasure(ctx)
  window.requestAnimationFrame(drawEverything)
}



 drawEverything()
 player.moveRight();
 treasure.setRandomPosition()

 document.onkeydown = function(e) {
  e.preventDefault() // Stop the default behavior (moving the screen to the left/up/right/down)
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
  } }