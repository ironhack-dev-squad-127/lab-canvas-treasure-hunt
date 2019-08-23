// Iteration 2
class Treasure {
  constructor() {
    this.col = 0;
    this.row = 0;
    this.image = new Image();
    this.image.src = 'images/treasure.png';
    this.image.addEventListener('load', event => {this.draw(ctx);}) 
  }

  setRandomPosition(maxRows, maxCols) {
    let randomRow = Math.floor(Math.random()*maxRows);
    let randomCol = Math.floor(Math.random()*maxCols);
    this.col = randomCol;
    this.row = randomRow;
  }

  draw(context) {
    let dx = this.col*width/numberOfColumns;
    let dy = this.row*height/numberOfRows;
    let dwidth = width/numberOfColumns;
    let dheight = height/numberOfRows;
    // this.image.addEventListener('load', event => {
    context.drawImage(this.image, dx, dy, dwidth, dheight);
    // }) 
  }
}