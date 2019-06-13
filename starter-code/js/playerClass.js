// Iteration 2 - Create Player Class

class Player {
  constructor(colX, rowY) {
    this.colX = colX;
    this.rowY = rowY;
    this.direction ='Down'
    this.imgLeft = new Image();
    this.imgRight = new Image();
    this.imgUp = new Image();
    this.imgDown = new Image();
    this.imgLeft.src = "images/character-left.png";
    this.imgRight.src = "images/character-right.png";
    this.imgUp.src = "images/character-up.png";
    this.imgDown.src = "images/character-down.png";
  }
  moveUp() {
    if (this.rowY > 0) {
      this.rowY = this.rowY - 1;
      this.direction='Up';
    }
    console.log(this.colX, this.rowY, this.direction);
  }
  moveDown() {
    if (this.rowY < 9) {
      this.rowY = this.rowY + 1;
      this.direction='Down';
    }
    console.log(this.colX, this.rowY, this.direction);
  }
  moveLeft() {
    if (this.colX > 0) {
      this.colX = this.colX - 1;
      this.direction="Left";
    }
    console.log(this.colX, this.rowY, this.direction);
  }
  moveRight() {
    if (this.colX < 9) {
      this.colX = this.colX + 1;
      this.direction="Right";
    }
    console.log(this.colX, this.rowY,this.direction);
  }
}
