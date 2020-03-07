let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
let width = canvas.width
let height = canvas.height

const tiles = 50;
const size = width/10;

//Iteration 1

 function drawGrid() {
 for (i=0; i<=height; i+=size) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, height);
    ctx.stroke();
    ctx.closePath();
    }

for (j=0; j<=width; j+=tiles) {
    ctx.beginPath();
    ctx.moveTo(0, j);
    ctx.lineTo(width, j);
    ctx.stroke();
    ctx.closePath();
 }
 }
 drawGrid();


  //Iteration 2

  class Character {
    constructor(col,row,imgPaths) {
      this.col = col
      this.row = row
      this.orientation = 'down'
      this.score = 0
      this.imgs = {}
      for (let orientation in imgPaths) {
        this.imgs[orientation] = new Image()
        this.imgs[orientation].src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwbF_Dfe870r-0xSw8UpA5ayhmpQp4RdPV5PmaTjWCcY4guc7L'
      }
    }
    moveUp(){
      this.row--
      this.orientation = 'up'
    }
    moveDown(){
      this.row++
      this.orientation = 'down'
    }
    moveLeft(){
      this.col--
      this.orientation = 'left'
    }
    moveRight(){
      this.col++
      this.orientation = 'right'
    }
  }
