// main.js
var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height


// Iteration 1
function drawGrid() {
    for (let x = 1; x <= 489; x += 50) {
        for (let y = 1; y <= 489; y += 50) {
            ctx.fillStyle = "white";
            ctx.fillRect(x, y, 48, 48);
        }
    }
}

// Iteraction 2 

class Character {
    constructor(colArg, rowArg) {
        this.col = colArg
        this.row = rowArg
    }

    moveDown() {
        this.row += 1;
    }

    moveUp() {
        this.row -= 1;
    }

    moveRight() {
        this.col += 1;
    }

    moveLeft() {
        this.col -= 1;
    }

}


function drawPlayer(player) {
    let image = new Image();
    image.src = "./images/character-down.png";
    image.addEventListener("load", function () {
        ctx.drawImage(image, player.col * 50, player.row * 50, 50, 50);
    })

}

// Interaction 4 

class Treasure {
    constructor(colArg, rowArg) {
        this.col = colArg;
        this.row = rowArg;
    }


    setRandomPosition() {
        this.col = Math.floor(Math.random() * 10);
        this.row = Math.floor(Math.random() * 10);
    }
}

function drawTreasure(treasure) {
    let image = new Image();
    image.src = "./images/treasure.png";
    image.addEventListener("load", function () {
        ctx.drawImage(image, (treasure.col) * 50, (treasure.row) * 50, 50, 50);
    })

}

// Interaction 5



document.onkeydown = function (event) {
    event.preventDefault()
    switch (event.keyCode) {
        case 37:
            console.log('left')
            player.moveLeft()
            break
        case 38:
            console.log('up')
            player.moveUp()
            break
        case 39:
            console.log('right')
            player.moveRight()
            break
        case 40:
            console.log('down')
            player.moveDown()
            break
    }
    drawEverything();
}


var player = new Character(0, 0)
let treasure = new Treasure(0, 0);
treasure.setRandomPosition();

function drawEverything() {
    drawGrid()
    drawPlayer(player)
    drawTreasure(treasure)
}

drawEverything()