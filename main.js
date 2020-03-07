var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;

// Iteration 1
function drawGrid() {

    //ctx.fillStyle = "blue";
    //ctx.fillRect(0,0, canvas.width, canvas.height)

    let x = 0;
    let y = 0;


    for (let ver = 0; ver <= canvas.width; ver += 50){
            ctx.beginPath();
            ctx.moveTo(ver,y);
            ctx.lineTo(ver,canvas.height);
            ctx.stroke();
            ctx.closePath();
        
    }

    for (let hor = 0; hor <= canvas.height; hor += 50){
        ctx.beginPath();
        ctx.moveTo(x,hor);
        ctx.lineTo(canvas.width,hor);
        ctx.stroke();
        ctx.closePath();
    }


}


// ITERATION 2: Character
class Character {
    constructor (){
        this.col = 0;
        this.row = 0;
        this.image = new Image();
        this.image.src ="https://i1.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/001bulbasaur_pokemon_mystery_dungeon_explorers_of_sky.png?fit=696%2C661&ssl=1";
    }

    //methods
    moveUp(){
        this.row -= 1;
    }

    moveRight(){
        this.col += 1;
    }

    moveDown(){
        this.row += 1;
    }

    moveLeft(){
        this.col -= 1;
    }
};

let character = new Character();


// ITERATION 3: drawPlayer function


function drawPlayer (col, row){
    //console.log(character.image.src,col,row)
    //ctx.fillRect(col, row, 50, 50);
    ctx.drawImage(character.image, col, row, 50,50);
}




function drawEverything() {
  drawGrid();
  drawPlayer(character.col, character.row);
  // drawTreasure()
}

window.addEventListener("load", drawEverything());