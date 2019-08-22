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
}