// main.js
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;

// Iteration 1
function drawGrid() {
    ctx.beginPath();
    ctx.fillStyle="black";
    ctx.fillStyle = "white";
    ctx.strokeStyle ="black"
    ctx.beginPath(0,0);
    for(let row=0; row<= 500; row+=500/11){
        
        for(let col=0;col<500;col+=500/11){
            ctx.beginPath(row,col);
            ctx.lineTo(row,col);
            ctx.fill();
    }
}
  // TODO: write the code of the function
}

function drawEverything() {
  drawGrid()
  // drawPlayer()
  // drawTreasure()
}
drawEverything();

