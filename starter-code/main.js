// main.js
var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height

class Character {
  constructor(colArg,rowArg) {
    this.col=colArg;
    this.row=rowArg;
    this.image=new Image();
    this.image.src="./images/character-down.png";
  }
  draw(ctx){
    if(treasure.col===(this.col)/50 && treasure.row===(this.row)/50){
      treasure.setRandomPosition();
      ctx.drawImage(this.image,this.col,this.row,this.image.width,this.image.height);
    }else{
      ctx.drawImage(this.image,this.col,this.row,this.image.width,this.image.height);
    }
  }
  moveUp(){
    if(this.row>0?this.row-=50:this.row);
    console.log("moved")
  }
  moveDown(){
    if(this.row<450?this.row+=50:this.row);
    console.log("moved")
  }
  moveLeft(){
    if(this.col>0?this.col-=50:this.col);
    console.log("moved")
  }
  moveRight(){
    if(this.col<450?this.col+=50:this.col);
    console.log("moved")
  }
}

class Treasure{
  constructor(colArg,rowArg){
    this.col=colArg;
    this.row=rowArg;
    this.image=new Image();
    this.image.src="images/treasure.png";
  }
  setRandomPosition(){
    this.col=Math.floor(Math.random()* 10);
    this.row=Math.floor(Math.random()*10);
  }
  draw(ctx){
    ctx.drawImage(this.image,this.col*50,this.row*50,50,50);
  }
}

// Iteration 1
function drawGrid() {
  for(let x=1;x<=489;x+=50){
    for(let y=1;y<=489;y+=50){
      ctx.fillStyle="white";
      ctx.fillRect(x, y,48,48);
    }
  }
}

function drawEverything() {
  ctx.clearRect(0,0,width,height);
  drawGrid();
  //drawPlayer();
  player.draw(ctx);
  treasure.draw(ctx);
  window.requestAnimationFrame(drawEverything);
}

document.onkeydown=function(e) {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  e.preventDefault() 
  switch (e.keyCode) {
    case 37: player.moveLeft();
    break;
    case 38: player.moveUp(); 
      break;
    case 39: player.moveRight();
      break;
    case 40: player.moveDown();
      break;
  }
}

let player = new Character(0,0);
let treasure = new Treasure(0,0);
treasure.setRandomPosition();
drawEverything()



