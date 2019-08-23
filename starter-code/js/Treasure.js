class Treasure {
  constructor(col,row) {
    this.col = col;
    this.row = row;
    this.image = new Image();
    this.setRandomPosition();
    this.image.src = "images/treasure.png";
  }
  setRandomPosition() {
  this.col = Math.floor(Math.random()*10);
  this.row = Math.floor(Math.random()*10);
  }
  draw (ctx) {
    ctx.drawImage(this.image, (this.col - 1) * 50, (this.row - 1) * 50, 50, 50);
  }
}
