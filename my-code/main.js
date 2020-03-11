// main.js
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;

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

function drawEverything() {
  drawGrid()
  // drawPlayer()
  // drawTreasure()
}
drawEverything();

let player = new Character(0,0);// (0,0) = Initial position;
player.moveDown() // Increase by 1 the value of player.row
player.moveDown() // Increase by 1 the value of player.row
player.moveRight() // Increase by 1 the value of player.col
console.log(player.col, player.row) // => 1,2
drawPlayer(player);


function drawPlayer(player){
  console.log("draw player called");
  let image = new Image();
  ctx.beginPath();
  console.log(player.orientation);
  if(player.orientation==="up"){
    console.log("up");
    image.src= "character-up.png"
  }
  else if(player.orientation==="down"){
    console.log("down");
    image.src= "character-down.png"
  }
  else if(player.orientation==="right"){
    console.log("I am inside right");
    image.src= "character-right.png"
    console.log(image);
  }
  else if(player.orientation==="left"){
    console.log("left");
    image.src= "character-left.png"
  } 
  ctx.drawImage(image,20,20,50,50)
  console.log("drawImagecalled")
  console.log("drawImagecalled")
}