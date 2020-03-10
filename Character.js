class Character {
	contructor (col, row) {
		this.col = col;
		this.row = row;
	}
	moveUp () {
		return col +=1
	}
	moveRight () {
		return row += 1
	}
	moveDown () {
		return col -= 1
	}
	moveLeft () {
		return row -=1
	}
}
var player = new Character(0,0) // (0,0) = Initial position
player.moveDown() // Increase by 1 the value of player.row
player.moveDown() // Increase by 1 the value of player.row
player.moveRight() // Increase by 1 the value of player.col
console.log(player.col, player.row) // => 1,2