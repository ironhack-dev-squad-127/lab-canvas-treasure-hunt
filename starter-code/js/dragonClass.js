

// Create the Dragon

class Dragon extends Player {
  constructor(colX, rowY) {
    super(colX, rowY)
    this.imgLeft.src = "images/dragon.png";
    this.imgRight.src = "images/dragon.png";
    this.imgUp.src = "images/dragon.png";
    this.imgDown.src = "images/dragon.png";
  }
  placeRandomly() {
    this.colX = Math.floor(Math.random() * 9);
    this.rowY = Math.floor(Math.random() * 9);
  }
}
