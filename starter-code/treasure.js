class Treasure{
    constructor(col, row){
        this.row= row;
        this.col=col;
        this.img=new Image();
        this.img.src='images/treasure.png';
    }
    drawTreasure(ctx){
    ctx.drawImage(this.img,this.col,this.row,52,52);
        console.log('appears the cristal');
    };
    
    setRandomPosition(){
        if (player(this.col,this.row) === treasure(this.col,this.row)){
            Math.floor((Math.random()*10)*50);
        }
    }
}





// class Treasure{
//     constructor(col, row){
//         this.row= row;
//         this.col=col;
//         this.img=new Image();
//         this.img.src='images/treasure.png';
//     }
//     drawTreasure(ctx){
//     ctx.drawImage(this.img,this.col,this.row,52,52);
//         console.log('appears the cristal');
//     };
// }