class Character {
    constructor(x,y){
    this.col=x;
    this.row=y;
    this.orientation="up";
    }
moveUp(){
    this.row++;
    this.orientation="up"
}
moveRight(){
    this.col++;
    this.orientation="rigth"
}
moveDown(){
    this.row++;
    this.orientation="down"
}
moveLeft(){
    this.col++;
    this.orientation="left"
}

}
