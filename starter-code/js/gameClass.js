

// Create a new Game

class Game {
  constructor() {
    this.state = true;
    this.points = 0;
    this.lives = 3;
  }
  checkLives() {
    if (this.lives === 0) {
      this.state = false;
    }
  }
  checkState() {
    if (this.state === false) {
      alert('Game Over')
      return false;
    }
    return true;
  }
}
