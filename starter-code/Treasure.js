// Iteration 2
class Treasure {
  constructor() {
    this.col = 0;
    this.row = 0;
  }

  setRandomPosition(maxRows, maxCols) {
    let randomRow = Math.floor(Math.random()*maxRows);
    let randomCol = Math.floor(Math.random()*maxCols);
    this.col = randomCol;
    this.row = randomRow;
  }

  draw(context) {
    let treasureImg = new Image();
    treasureImg.src = 'images/treasure.png';
    let dx = this.col*width/numberOfColumns;
    let dy = this.row*height/numberOfRows;
    let dwidth = width/numberOfColumns;
    let dheight = height/numberOfRows;
    treasureImg.addEventListener('load', event => {
      context.drawImage(treasureImg, dx, dy, dwidth, dheight);
    }) 
  }
}