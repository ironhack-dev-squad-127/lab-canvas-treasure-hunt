class Treasure{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.image =new Image();
        this.image.src="treasure.png";
    }

setRandomPosition(max_range){
    //rounded and multiply. Treasure will be always inside a square
    this.x=Math.floor(Math.random()*max_range/50)*50;
    this.y=Math.floor(Math.random()*max_range/50)*50;
}
}