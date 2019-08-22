class Character {
    constructor(col, row) {
      this.col = col;
      this.row = row;
      this.image = new Image();
      this.image.src = "images/character-down.png";
    
      }

  
  drawPlayer(ctx){ 
      ctx.drawImage(this.image, this.row, this.col);
     }
  
  moveUp(){
  
    this.col -= 50
  }
  
  moveRight(){
    this.row += 50

  
  }
  
  moveLeft(){
    this.row -= 50
  
  }
  
  moveDown(){
    this.col += 50  
  }
}



  class Treasure {
    constructor(col, row) {
      this.col = col;
      this.row = row;
      this.image = new Image();
      this.image.src = "images/treasure.png";

    }

  drawTreasure(ctx){
    ctx.drawImage(this.image, this.row, this.col, 50, 50);
  }

  setRandomPosition(){
    this.col = Math.floor(Math.random() * 10) * 50
    this.row = Math.floor(Math.random() * 10) * 50
  }

  }