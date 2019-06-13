// ---CHARACTER---
class Character {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.score =0
  }
  moveUp() {
    if (this.row > 0) {
      this.row -= 1;
    }
  }
  moveRight() {
    if (this.col < 9){
    this.col += 1;
    }
  }
  moveDown() {
    if (this.row< 9 ){
    this.row += 1;
    }
  }
  moveLeft() {
    if (this.col>0){
    this.col -= 1;
    }
  }
}