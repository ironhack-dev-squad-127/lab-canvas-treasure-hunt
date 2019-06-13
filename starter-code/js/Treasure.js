//---TREASURE---
//---Treasure class--
class Treasure {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }
  setRandomPosition() {
    this.col = Math.floor((Math.random() * width) / 50);
    this.row = Math.floor((Math.random() * height) / 50);
  }
}