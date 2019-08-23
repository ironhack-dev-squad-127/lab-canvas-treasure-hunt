class Character{
    constructor(col,row){
        this.col = col;
        this.row = row;
        this.image = new Image();
        this.image.src = "images/character-down.png";
    }

    draw(ctx) {
      ctx.drawImage(this.image, this.col, this.row, this.image.width, this.image.height);
    }
    moveUp(){
        this.row > 0 ? this.row -= 50 : this.row;
        console.log("KEY PRESSED");
    }
    moveDown(){
        this.row < 450 ? this.row += 50 : this.row;
        console.log("KEY PRESSED");
    }
    moveRight(){
        this.col < 450 ? this.col += 50 : this.col;
        console.log("KEY PRESSED");
    }
    moveLeft(){
        this.col > 0 ? this.col -= 50 : this.col;
        console.log("KEY PRESSED");
    }
}