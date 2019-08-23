var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height

// Iteration 1

// let player = new Character(0,0);
let player = new Character(0,0);

let treasure = new Treasure(0,0);
treasure.setRandomPosition();

function drawGrid() {
for (let x = 0; x <= height; x=x+50) {
        ctx.beginPath();
        ctx.moveTo(x,0);
        ctx.lineTo(x,height);
        ctx.stroke();
      }
for (let y = 0; y <= width; y=y+50) {
        ctx.beginPath();
        ctx.moveTo(0,y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
}

function drawEverything() {
    ctx.clearRect(0,0,width,height);
    drawGrid();
    player.draw(ctx);
    treasure.draw(ctx);
    window.requestAnimationFrame(drawEverything);
    }

function update(keyCode){
    // document.onkeydown = function(e) {
        // e.preventDefault() // Stop the default behavior (moving the screen to the left/up/right/down)
        switch (keyCode) {
          case 37: player.moveLeft(); break;
          case 38: player.moveUp(); break;
          case 39: player.moveRight(); break;
          case 40: player.moveDown(); break;
        }
if(player.col === treasure.col && player.row === treasure.row){
    treasure.setRandomPosition();
}
}
 
setTimeout(() => {drawEverything()}, 500);
 

  document.onkeydown = function(e) {
    e.preventDefault();
    update(e.keyCode);
    drawEverything();
  }

 







  // function drawTreasure(){
    // const image = new Image();
    
    // image.src = "images/treasure.png";
    //  treasure.image.addEventListener('load', function () {
        // const imageWidth = '30px;
        // const imageHeight = 30px;
        // ctx.drawImage(treasure.image, (treasure.col)*50 , (treasure.row)*50, 50, 50);
// }); 
// }