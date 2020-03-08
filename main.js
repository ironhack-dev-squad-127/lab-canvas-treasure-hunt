var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;

//----------- ITERATION 1 -----------
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


//----------- ITERATION 2: Character -----------
class Character {
    constructor (){
        this.col = 0;
        this.row = 0;
        this.image = new Image();
        this.image.src ="https://i1.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/001bulbasaur_pokemon_mystery_dungeon_explorers_of_sky.png?fit=696%2C661&ssl=1";
    }

    //methods
    moveUp(){
        this.row -= 50;
    }

    moveRight(){
        this.col += 50;
    }

    moveDown(){
        this.row += 50;
    }

    moveLeft(){
        this.col -= 50;
    }
}

let character = new Character();


//----------- ITERATION 3: drawPlayer function -----------


function drawPlayer (col, row){
    //console.log(character.image.src,col,row)
    //ctx.fillRect(col, row, 50, 50);
    ctx.drawImage(character.image, col, row, 50,50);
}

//----------- ITERATION 4: drawTreasure function -----------

class Treasure {
    constructor(col, row){
        this.col = 50;
        this.row = 50;
        this.image = new Image();
        this.image.src = "https://www.mariowiki.com/images/thumb/4/47/Super-gem.png/200px-Super-gem.png";
    }

    setRandomPosition(){
        for (let hor = 0; hor <= canvas.width - 1; hor += 50){
            let randomNum = Math.floor(Math.random()*hor);
            this.col = Math.round(randomNum / 50)*50;
        }

        for (let ver = 0; ver <= canvas.height - 1; ver += 50){
            let randomNum = Math.floor(Math.random()*ver);
            this.row = Math.round(randomNum / 50)*50;
        }        
    }
}

let treasure = new Treasure();
treasure.setRandomPosition();
//console.log(treasure.col);

function drawTreasure (col,row){
    //treasure.setRandomPosition();
    ctx.drawImage(treasure.image, col, row, 50, 50);
}


function drawEverything() {
  drawGrid();
  drawPlayer(character.col, character.row);
  drawTreasure(treasure.col, treasure.row);
}


window.addEventListener("load", drawEverything());


//----------- ITERATION 5 -----------

document.onkeydown = function(e) {
    e.preventDefault(); // Stop the default behavior (moving the screen to the left/up/right/down)
    switch (e.keyCode) {
      case 37: 
        // console.log('left');
        if (character.col <= 0){
            // console.log("it's out of the board")
            break;
        } else{
            character.moveLeft();
        }
        
        if(character.col === treasure.col && character.row === treasure.row){
                treasure.setRandomPosition();
            }
        
        break;
      case 38: 
        // console.log('up');
        if (character.row <= 0){
            // console.log("it's out of the board")
            break;
        } else{
            character.moveUp(); 
        }
        
        if(character.col === treasure.col && character.row === treasure.row){
            treasure.setRandomPosition();
        } 
        
        break;
      case 39: 
        // console.log('right');
        if (character.col >= canvas.width - 50){
            // console.log("it's out of the board")
            break;
        } else{
            character.moveRight();
        }
        
        if(character.col === treasure.col && character.row === treasure.row){
            treasure.setRandomPosition();
        }
        
        break;
      case 40: 
        // console.log('down');
        if (character.row >= canvas.height - 50){
            // console.log("it's out of the board")
            break;
        } else{
            character.moveDown();
        }
        
        if(character.col === treasure.col && character.row === treasure.row){
            treasure.setRandomPosition();
        }
        
        break;
    }
    ctx.clearRect (0,0, canvas.width, canvas.height);
    drawEverything();
    return e;
};