// Iteration 2
class Character {
  constructor() {
    this.col = 0;
    this.row = 0;
    this.direction = 'down';
    this.upImage = new Image();
    this.upImage.src = 'images/character-up.png';
    this.upImage.addEventListener('load', event => {this.draw(ctx);});
    this.downImage = new Image();
    this.downImage.src = 'images/character-down.png';
    this.downImage.addEventListener('load', event => {this.draw(ctx);});
    this.leftImage = new Image();
    this.leftImage.src = 'images/character-left.png';
    this.leftImage.addEventListener('load', event => {this.draw(ctx);});
    this.rightImage = new Image();
    this.rightImage.src = 'images/character-right.png';
    this.rightImage.addEventListener('load', event => {this.draw(ctx);});
    this.image = this.downImage;
    
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

  draw(context) {
    this.image = new Image();
    switch (this.direction) {
      case 'up':
        this.image = this.upImage;
        break;
      case 'down':
        this.image = this.downImage;
        break;
      case 'left':
        this.image = this.leftImage;
        break;
      case 'right':
        this.image = this.rightImage;
        break;
    }

    let dx = this.col*width/numberOfColumns;
    let dy = this.row*height/numberOfRows;
    let dwidth = width/numberOfColumns;
    let dheight = height/numberOfRows;

    // this.image.addEventListener('load', event => {
    context.drawImage(this.image, dx, dy, dwidth, dheight);
    // }) 
  }
}
