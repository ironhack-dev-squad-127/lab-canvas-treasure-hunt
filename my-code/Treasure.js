class Treasure{
    constructor(x,y){
        this.col=x;
        this.row=y;
    }

setRandomPosition(max_range){
    this.col=Math.floor(Math.random()*max_range*50)
    this.row=Math.floor(Math.random()*max_range*50)
}
}