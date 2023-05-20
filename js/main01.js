class TextLoadGame {
  constructor(root) {
    const div = document.createElement("div");
    div.style.position = "absolute";
    div.style.left = 190;
    div.style.top = 50;
    div.style.zIndex = 2000;
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.justifyContent = "space-around";
    div.style.background = "#bdc3c7";
    div.style.opacity = "0.65";
    div.style.width = 500;
    div.style.height = 200;

    const starText = document.createElement("div");
    starText.style.display = "flex";
    starText.style.flexDirection = "column";

    const upArrowsText = document.createElement("div");
    upArrowsText.style.display = "flex";
    upArrowsText.style.justifyContent = "space-between";

    const p1 = document.createElement("div");
    p1.innerHTML = "&larr; Left";
    p1.style.width = 200;
    p1.style.textAlign = "center";
    p1.style.fontSize = 20;
    p1.style.fontWeight = "700";

    const p2 = document.createElement("div");
    p2.innerHTML = "&rarr; Right";
    p2.style.width = 200;
    p2.style.textAlign = "center";
    p2.style.fontSize = 20;
    p2.style.fontWeight = "700";

    const downArrowsText = document.createElement("div");
    downArrowsText.style.display = "flex";
    downArrowsText.style.justifyContent = "space-between";

    // const p3 = document.createElement("div");
    // p3.innerHTML = "&uarr; Up";
    // p3.style.width = 200;
    // p3.style.textAlign = "center";
    // p3.style.fontSize = 20;
    // p3.style.fontWeight = "700";

    // const p4 = document.createElement("div");
    // p4.innerHTML = "&darr; Down";
    // p4.style.width = 200;
    // p4.style.textAlign = "center";
    // p4.style.fontSize = 20;
    // p4.style.fontWeight = "700";

    const startButton = document.createElement("button");
    startButton.style.background = "white";
    startButton.style.border = 0;
    startButton.style.borderRadius = 4;
    startButton.style.fontSize = "larger";
    startButton.style.fontWeight = "600";
    startButton.style.height = 30;
    startButton.innerHTML = "Start the game";

    const mainControler = () => {
      document.getElementById("app").append(heartShow);
      const bg = document.getElementById("bg");
      bg.remove();
      const gameEngine = new Engine(document.getElementById("app"));

      const keydownHandler = (event) => {
        if (event.code === "ArrowLeft") {
          gameEngine.player.moveLeft();
        }

        if (event.code === "ArrowRight") {
          gameEngine.player.moveRight();
        }
      };

      document.addEventListener("keydown", keydownHandler);

      gameEngine.gameLoop();

      div.remove();
    };

    startButton.addEventListener("click", mainControler);

    upArrowsText.append(p1, p2);
    // downArrowsText.append(p3, p4);
    starText.append(upArrowsText, downArrowsText);

    div.append(starText, startButton);
    root.appendChild(div);
  }
}

class TextReset {
  constructor(root) {
    const div = document.createElement("div");

    div.style.position = "absolute";
    div.style.left = 350;
    div.style.top = 50;
    div.style.zIndex = 2000;
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.justifyContent = "space-around";
    div.style.background = "#bdc3c7";
    div.style.opacity = "0.65";
    div.style.width = 300;
    div.style.height = 250;

    const resetMessage = document.createElement("div");
    resetMessage.style.color = "black";
    resetMessage.style.font = "bold 30px Impact";
    resetMessage.innerHTML = "GAME OVER !!";
    resetMessage.style.textAlign = "center";

    const resetButton = document.createElement("button");
    resetButton.style.background = "white";
    resetButton.style.border = 0;
    resetButton.style.borderRadius = 4;
    resetButton.style.fontSize = "larger";
    resetButton.style.fontWeight = "600";
    resetButton.style.height = 30;
    resetButton.innerHTML = "reset the game";

    const restTheGame = () => {
      const enemy = document.querySelectorAll(".enemy");
      for (let i = 0; i < enemy.length; i++) {
        enemy[i].remove();
      }
      const player = document.getElementById("player");
      player.remove();

      const score = document.getElementById("score");
      score.remove();

      const bg = document.getElementById("bg");
      bg.remove();

      document.getElementById("app").append(heartShow);

      const gameEngine = new Engine(document.getElementById("app"));

      const keydownHandler = (event) => {
        if (event.code === "ArrowLeft") {
          gameEngine.player.moveLeft();
        }

        if (event.code === "ArrowRight") {
          gameEngine.player.moveRight();
        }
      };

      document.addEventListener("keydown", keydownHandler);

      gameEngine.gameLoop();
      div.remove();
    };

    resetButton.addEventListener("click", restTheGame);

    div.append(resetMessage, resetButton);
    root.appendChild(div);
  }
}

addBackground(document.getElementById("app"));
const startGame = new TextLoadGame(document.getElementById("app"));
