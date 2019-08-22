class Character {
    constructor(col, row) {
      this.col = col;
      this.row = row;
      this.image = new Image();
      this.image.src = "images/character-down.png";
    
    }
  
  drawPlayer(ctx){ 
    //this.image.addEventListener('load', function () {
    //ctx.drawImage(this.image, this.col, this.row);
    this.image.addEventListener('load', function () {    
        //const pattern = ctx.createPattern(this.image, 'no-repeat');
    
      
        //ctx.fillRect(50, 50);
        ctx.drawImage(this.image, this.col, this.row);
      }); }
  
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
  
  }}