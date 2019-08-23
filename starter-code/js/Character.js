class Character {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.image = new Image();
    this.image.src = './images/character-down.png';
  }

  draw(ctx) {
    //.log('sj');
    ctx.drawImage(this.image, (this.col - 1) * 50, (this.row - 1) * 50, 50, 50);
  }
  moveUp() {
      this.row -= 1;
      this.image.src = './images/character-up.png';
      if (this.row < 1) {
        this.row += 1;
    } 
  }
  moveRight() {
    
      this.col += 1;
      this.image.src = './images/character-right.png';
      if (this.col > 10) {
        this.col -= 1;
    } 
  }
  moveDown() {
    
      this.row += 1;
      this.image.src = './images/character-down.png';
      if (this.row > 10) {
        this.row -= 1;
    } 
  }

    moveLeft() {
      this.col -= 1;
      this.image.src = './images/character-left.png';
      if (this.col < 1) {
        this.col += 1;
    }
  }
}