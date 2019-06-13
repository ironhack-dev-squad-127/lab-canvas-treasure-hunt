

// DOM Listener

document.addEventListener("keydown", event => {
  const key = event.key.toLowerCase();
  console.log(key);
  if (game.checkState()) {
    switch (key) {
      case "arrowleft":
        player.moveLeft();
        break;
      case "arrowright":
        player.moveRight();
        break;
      case "arrowup":
        player.moveUp();
        break;
      case "arrowdown":
        player.moveDown();
        break;
    }
  }
  drawEverything();
});

document.addEventListener("keydown", event => {
  const key = event.key.toLowerCase();
  console.log(key);
  if (game.checkState()) {
    switch (key) {
      case "a":
        dragon.moveLeft();
        break;
      case "d":
        dragon.moveRight();
        break;
      case "w":
        dragon.moveUp();
        break;
      case "s":
        dragon.moveDown();
        break;
    }
  }
  drawEverything();
});


let $button = document.querySelector(".btn.btn-primary");

$button.addEventListener("click", event => {
  console.log("klick");
  game = new Game();
  player = new Player(5, 5);
  treasure = new Treasure();
  dragon = new Dragon(0, 9);
  console.log(game, dragon, player, treasure);
  drawEverything();
});