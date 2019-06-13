

// Create the Treasure

class Treasure {
  constructor() {
    this.colX = 4;
    this.rowY = 1;
    this.imgTreasure = new Image();
    this.imgTreasure.src = "images/treasure.png";
  }
  placeRandomly() {
    this.colX = Math.floor(Math.random() * 9);
    this.rowY = Math.floor(Math.random() * 9);
  }
}
