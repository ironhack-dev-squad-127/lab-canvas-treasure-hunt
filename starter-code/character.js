class Character{
    constructor(col,row){
        this.row=row;
        this.col=col;
        this.image = new Image();
        this.image.src = 'images/character-down.png';
    }
    // draw(ctx){
    //     ctx.drawImage(this.image,this.col,this.row,50,50);
    //     console.log('appears the guy');
    // };


    moveUp(){
        this.col-=1;
    }; 

    moveRight(){
        this.row += 1;
    };

    moveDown(){
        this.col += 1;
    };
    
    moveLeft(){
        this.colrow -=1;
    };
}




// class Character{
//     constructor(col,row){
//         this.row=row;
//         this.col=col;
//         this.image = new Image();
//         this.image.src = 'images/character-down.png';
//     }
//     draw(ctx){
//         ctx.drawImage(this.image,this.col,this.row,50,50);
//         console.log('appears the guy');
//     };
// }

