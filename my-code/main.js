// main.js
let player = new Character(450,200);// (0,0) = Initial position;
let treasure = new Treasure(0,0);
var $canvas = document.querySelector('canvas');
var ctx = $canvas.getContext('2d');
var width = $canvas.width;
var height = $canvas.height;
console.log(player)
console.log(treasure)
drawEverything();

// Iteration 1
function drawGrid() {
    ctx.beginPath();
    ctx.strokeStyle ="rgb(61, 60, 60)";
    for(let col=0; col<=height; col+=50){  
      ctx.moveTo(col,0);
      ctx.lineTo(col,height);
      ctx.stroke();
    }

    for(let row=0; row<=width; row+=50){  
      ctx.moveTo(0,row);
      ctx.lineTo(width,row);
      ctx.stroke();
    }
  // TODO: write the code of the function
}

function drawPlayer(player){
  console.log("draw player called");

  ctx.beginPath();

  if(player.orientation==="up"){
    player.image.src= "character-up.png";
  }
  else if(player.orientation==="down"){
    player.image.src= "character-down.png";
  }
  else if(player.orientation==="right"){
    player.image.src= "character-right.png";
  }
  else if(player.orientation==="left"){
    player.image.src= "character-left.png";
  }
   player.image.onload = function() {
     
  console.log(player);
     ctx.drawImage(player.image,player.x,player.y,50,50);
   }
}

function drawTreasure(treasure){
  ctx.beginPath();
  console.log("Drawing_treasure");
  console.log(treasure);
  treasure.image.onload = function() {
    console.log("Drawing_treasure2");
    console.log(treasure);
    ctx.drawImage(treasure.image,treasure.x,treasure.y,50,50);
  }
  ctx.closePath();
}

function drawEverything() {
  ctx.clearRect(0,0,width,height);
  drawGrid();
  drawPlayer(player);
  drawTreasure(treasure);
}

  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37: 
        console.log('left');if(player.x>=50)player.moveLeft();
        break
      case 38: 
        console.log('up');if(player.y>=50)player.moveUp();
        break
      case 39: 
        console.log('right');if(player.x<450)player.moveRight();
        break
      case 40: 
        console.log('down');if(player.y<450)player.moveDown();
        break
    }
    if (player.x === treasure.x && player.y === treasure.y) {
      console.log("Treasure catched")
      treasure.setRandomPosition(width);
    }
    drawEverything();
  }