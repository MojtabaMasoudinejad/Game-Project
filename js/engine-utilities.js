const nextEnemySpot = (enemies) => {
  const enemySpots = (GAME_WIDTH - 20) / ENEMY_WIDTH;

  const spotsTaken = [false, false, false, false, false];
  enemies.forEach((enemy) => {
    spotsTaken[enemy.spot] = true;
  });

  let candidate = undefined;

  while (candidate === undefined || spotsTaken[candidate]) {
    candidate = Math.floor(Math.random() * enemySpots);
  }

  return candidate;
};

const addBackground = (root) => {
  const bg = document.createElement("img");
  bg.setAttribute("id", "bg");

  bg.src = "images/them03.png";
  bg.style.height = `${GAME_HEIGHT}px`;
  bg.style.width = `${GAME_WIDTH}px`;

  root.append(bg);

  const whiteBox = document.createElement("div");

  whiteBox.style.zIndex = 100;
  whiteBox.style.position = "absolute";
  whiteBox.style.top = `${GAME_HEIGHT}px`;
  whiteBox.style.height = `${ENEMY_HEIGHT}px`;
  whiteBox.style.width = `${GAME_WIDTH}px`;
  whiteBox.style.background = "#fff";
  root.append(whiteBox);
};

const scoreBar = (root, score) => {
  const div = document.createElement("div");
  div.setAttribute("id", "score");
  div.style.position = "absolute";
  div.style.left = 30;
  div.style.top = 20;
  div.style.zIndex = 2000;
  div.style.textAlign = "center";
  div.style.fontWeight = "800";
  div.style.backgroundColor = "#bdc3c7";
  div.style.width = 150;
  div.style.height = 20;

  div.innerHTML = `Score : ${score}`;

  root.append(div);
};
livesShows = [];
const LivesBar = (root, numberOfHearts) => {
  const div = document.createElement("div");
  div.setAttribute("id", "hearts");
  div.style.position = "absolute";
  div.style.left = 30;
  div.style.top = 50;
  div.style.zIndex = 2000;
  div.style.textAlign = "center";
  div.style.fontWeight = "800";
  div.style.backgroundColor = "#bdc3c7";
  div.style.width = 150;
  div.style.height = 20;
  let hearts = [[], ["&#x2764"], ["&#x2764 &#x2764"]];

  div.innerHTML = hearts[numberOfHearts];

  root.append(div);
};

/// heartsShow
const heartShow = document.createElement("div");
heartShow.setAttribute("id", "hearts");
heartShow.innerHTML = "&#x2764 &#x2764 &#x2764";
heartShow.style.position = "absolute";
heartShow.style.left = 30;
heartShow.style.top = 50;
heartShow.style.zIndex = 2000;
heartShow.style.textAlign = "center";
heartShow.style.fontWeight = "800";
heartShow.style.backgroundColor = "#bdc3c7";
heartShow.style.width = 150;
heartShow.style.height = 20;
