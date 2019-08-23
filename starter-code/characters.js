class Character {
    constructor (col, row) {
        this.col = col;
        this.row = row;
        this.image = new Image(); 
        this.image.src = 'images/character-down.png';
    }


    drawPlayer(c){  
        c.drawImage(this.image, this.col , this.row, 50, 50)
        console.log('DRAAAAW')
    }

    moveUp() {
        this.row -= 1;
    }

    moveRight() {
        this.col += 1;
    }

    moveDown() {
        this.row -= 1;
    }

    moveLeft() {
        this.col -= 1;
    }

}

class Treasure {
    constructor (col, row) {
        this.col = col;
        this.row = row;
        this.foto = new Image ();
        this.foto.src = 'images/treasure.png';
    }

    drawTreasure(c) {
        c.drawImage(this.foto, this.col, this.row, 50, 50);
        console.log('TEST')
    }

    setRandomPosition() {
        let x = Math.floor(Math.random()*10)*50 + 50;
        let y = Math.floor(Math.random()*10)*50 + 50;
    }
}