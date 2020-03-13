class Character {
    constructor(x,y){
    this.x=x;
    this.y=y;
    this.orientation="up";
    this.image=new Image();
    }
moveUp(){
    this.y-=50;
    this.orientation="up"
}
moveRight(){
    this.x+=50;
    this.orientation="right"
}
moveDown(){
    this.y+=50;
    this.orientation="down"
}
moveLeft(){
    this.x-=50;
    this.orientation="left"
}

}
