// main.js
var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height
let player = new Character(100,50);
let treasure = new Treasure(100,50);

window.addEventListener('load', function(){
    drawEverything();
});

// Iteration 1
function drawGrid() {
    
    for (x= 0; x < 550; x+=50){
        ctx.strokeRect(0,0,x,0);
        for (y= 0; y < 550; y+=50){
            ctx.strokeRect(0,0,x,y);
        }
    }
    ctx.strokeStyle='black';
  // TODO: write the code of the function
}

function drawPlayer(){
  ctx.drawImage(this.image,this.col,this.row,50,50);
  console.log('appears the guy');
};



//drawTreasure()

function drawEverything() {
  drawGrid()
  //player.draw(ctx)
  //treasure.drawTreasure(ctx)
}

