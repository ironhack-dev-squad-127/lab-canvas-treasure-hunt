// Iteration 2
class Character {
  constructor() {
    this.col = 0;
    this.row = 0;
    this.direction = 'down';
  }

  moveUp() {
    this.row -= 1;
    this.direction = 'up';
    if (this.row<0) this.row = 0;
  }

  moveDown() {
    this.row += 1;
    this.direction = 'down'
    if (this.row>9) this.row = 9;
  }

  moveLeft() {
    this.col -= 1;
    this.direction = 'left';
    if (this.col<0) this.col = 0;
  }

  moveRight() {
    this.col += 1;
    this.direction = 'right';
    if (this.col>9) this.col = 9;
  }
}