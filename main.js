// main.js
var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')

//-----------------------------------------  classes ---------------------------------


class Character {
    constructor(col, row) {
        this.col = col;
        this.row = row;

    }
    moveUp() {
        this.row += 1;
        drawEverything();
    }
    moveRight() {
        this.col += 1;
        drawEverything();
    }
    moveDown() {
        this.row -= 1;
        drawEverything();
    }
    moveLeft() {
        this.col -= 1;
        drawEverything();
    }
}
let char = new Character(5, 5)

class Treasure {
    constructor(col, row) {
        this.col = col;
        this.row = row;

    }
    setRandomPosition() {

    }
}


//------------------------------------------ const --------------------------------------


var width = canvas.width
var height = canvas.height


let col2 = Math.floor(Math.random() * 9);
let row2 = Math.floor(Math.random() * 9);
let posCol2 = width / 10 * col2;
let posRow2 = height / 10 * row2;


let col = char.col;
let row = char.row;
let posCol = width / 10 * col;
let posRow = height / 10 * row;

//-------------------------------   Iteration 1  grid ---------------------------------------------------------
function drawGrid() {
    for (let i = 0; i <= width; i += width / 10) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
        ctx.stroke();
    }
    for (let i = 0; i <= height; i += height / 10) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(width, i);
        ctx.stroke();
    }
}

//------------------------------Treasure--------------------------------------------

function make_base_2() {
    base_image_2 = new Image();
    base_image_2.src = './starter-code/images/treasure.png';
    ctx.drawImage(base_image_2, posCol2 + 50, posRow2 + 50, width / 10, height / 10);
    console.log('image--2')

}

const drawTreasure = () => {
    make_base_2();
}

//-------------------------- character -----------------------------------------------


const drawPlayer = () => {
    base_image = new Image();
    base_image.src = './starter-code/images/character-down.png';
    ctx.drawImage(base_image, width / 10 * char.col, height / 10 * char.row, width / 10, height / 10);
    console.log('image')
}

//-------------------------- draweverything -----------------------------------------------

function drawEverything() {
    ctx.clearRect(0, 0, 500, 500)
    drawGrid();
    drawPlayer();
    drawTreasure();
    console.log('draweverything', char, posCol, posRow, col, row)
}

//-----------------------------------------------------------------------


document.onkeydown = function (e) {
    e.preventDefault() // Stop the default behavior (moving the screen to the left/up/right/down)
    switch (e.keyCode) {
        case 37:
            char.moveLeft()
            break
        case 38:
            char.moveDown()
            break
        case 39:
            char.moveRight();
            break
        case 40:
            char.moveUp()
            break
    }
}

drawEverything();