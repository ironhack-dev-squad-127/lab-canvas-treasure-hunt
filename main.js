let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
let width = canvas.width
let height = canvas.height
let tileSize = width / 10

// Iteration 1
function drawGrid() {
	// for (i = 0; i < 10; i++) {
	ctx.lineWidth = 3
	// }
	ctx.fillStyle = "black";
	// ctx.fillRect(0, 0, 500, 500);
  for (let i = 0; i <= height; i+=tileSize) { 
		ctx.beginPath();
		ctx.moveTo(i, 0);
		ctx.lineTo(i, height);
		ctx.stroke();
		ctx.closePath();
	} 

	for (let y = 0; y <= width; y+=tileSize) {
		ctx.beginPath();
		ctx.moveTo(0, y);
		ctx.lineTo(width, y);
		ctx.stroke();
		ctx.closePath();
	}
}

function drawEverything() {
  drawGrid()
  // drawPlayer()
  // drawTreasure()
}

drawEverything()
