class Player {
  constructor(root) {
    // root = document.getElementById('app')

    // this.x = 2 * PLAYER_WIDTH;
    this.x = (GAME_WIDTH - 20) / 2 - PLAYER_WIDTH / 2;

    const y = GAME_HEIGHT - PLAYER_HEIGHT - 5;
    // the y position of player which can be changed based on any key after, it is constant not on the buttom on game play

    this.domElement = document.createElement("img");
    this.domElement.src = "images/p n 02.png";
    this.domElement.setAttribute("id", "player");

    this.domElement.style.position = "absolute";
    this.domElement.style.left = `${this.x}px`;
    this.domElement.style.top = ` ${y}px`;
    this.domElement.style.zIndex = "10";
    root.appendChild(this.domElement);
  }

  moveLeft() {
    if (this.x > 0) {
      this.x = this.x - PLAYER_WIDTH;
    }

    this.domElement.style.left = `${this.x}px`;
  }

  moveRight() {
    if (this.x + PLAYER_WIDTH < GAME_WIDTH) {
      this.x = this.x + PLAYER_WIDTH;
    }
    this.domElement.style.left = `${this.x}px`;
  }
}
