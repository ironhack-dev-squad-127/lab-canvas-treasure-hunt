// Iteration 2
class Character {
  constructor() {
    this.col = 0;
    this.row = 0;
    this.direction = 'down';
    this.image = new Image();
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

  draw(context, numberOfRows, numberOfColumns) {
    this.image = new Image();
    switch (this.direction) {
      case 'up':
        this.image.src = 'images/character-up.png';
        break;
      case 'down':
        this.image.src = 'images/character-down.png';
        break;
      case 'left':
        this.image.src = 'images/character-left.png';
        break;
      case 'right':
        this.image.src = 'images/character-right.png';
        break;
    }

    let dx = this.col*width/numberOfColumns;
    let dy = this.row*height/numberOfRows;
    let dwidth = width/numberOfColumns;
    let dheight = height/numberOfRows;

    this.image.addEventListener('load', event => {
      context.drawImage(this.image, dx, dy, dwidth, dheight);
    }) 
  }
}
