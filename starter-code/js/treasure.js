class Treasure {
    constructor(col, row){
        this.col = col;
        this.row = row;
        this.image = new Image();
        this.image.src = "images/treasure.png";
        this.player = new Character();
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.col*50, this.row*50, 50, 50);
}
    
    setRandomPosition(){
        this.col = Math.floor(Math.random()* 10);
        this.row = Math.floor(Math.random()* 10);
     }
}