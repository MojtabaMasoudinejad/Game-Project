let gameScore = 0;
let gameScoreLast = 0;

class Engine {
  constructor(theRoot) {
    this.root = theRoot;
    this.lives = 3;
    this.player = new Player(this.root);
    this.canYouHitMe = true;
    this.enemies = [];
    addBackground(this.root);
  }
  // MEthod 1
  gameLoop = () => {
    if (this.lastFrame === undefined) {
      this.lastFrame = new Date().getTime();
    }

    let timeDiff = new Date().getTime() - this.lastFrame;

    this.lastFrame = new Date().getTime();
    this.enemies.forEach((enemy) => {
      enemy.update(timeDiff);
    });

    this.enemies = this.enemies.filter((enemy) => {
      return !enemy.destroyed;
    });

    while (this.enemies.length < MAX_ENEMIES) {
      const spot = nextEnemySpot(this.enemies);
      this.enemies.push(new Enemy(this.root, spot));
    }

    // x of the player is this.player.x
    //top of player is "GAME_HEIGHT - PLAYER_HEIGHT - 10"

    // x of the enemy is this.enemies[i].x
    // y of the enemy is this.enemies[i].y

    this.enemies.forEach((enemy) => this.checkCollision(enemy));
    if (this.lives <= 0) {
      gameScoreLast = gameScore;

      const resetText = new TextReset(document.getElementById("app"));

      return;
    }

    gameScore += 1;
    scoreBar(this.root, gameScore - gameScoreLast);
    setTimeout(this.gameLoop, 20);
  };
  // Method 2
  checkCollision = (enemy) => {
    if (
      this.player.x < enemy.x + ENEMY_WIDTH &&
      this.player.x + PLAYER_WIDTH > enemy.x &&
      PLAYER_Y_POSITION < enemy.y + ENEMY_HEIGHT &&
      PLAYER_Y_POSITION + PLAYER_HEIGHT > enemy.y
    ) {
      if (this.canYouHitMe) {
        document.getElementById("hearts").remove();
        LivesBar(this.root, this.lives - 1);

        this.lives = this.lives - 1;
        this.canYouHitMe = false;
        setTimeout(this.resetPlayerStatus, 1200);
      }
    }
  };

  // With a declaration
  resetPlayerStatus = () => {
    console.log("player reset");
    this.canYouHitMe = true;
  };

  isPlayerDead = () => {
    return false;
  };
}
