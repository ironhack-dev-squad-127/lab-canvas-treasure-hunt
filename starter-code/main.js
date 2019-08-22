// main.js
var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height
var player = new Character(0,0);

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
  drawGrid() 
  player.drawPlayer(ctx)
  // drawTreasure()

 }


 drawEverything ()