console.log("[Rychard Antony Pereira de Arruda] Flappy Bird - Refactored");

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

// Assets
const sprites = new Image();
sprites.src = "sprites.png";

const soundEffects = {
  hit: new Audio("efeitos-sonoros/efeitos_hit.wav"),
};

// Game State
let frame = 0;
const speed = 2;

// Entities
const background = new Background(context, sprites, canvas);
const floor = new Floor(context, sprites, canvas);
const bird = new Bird(context, sprites);
const pipes = new Pipes(context, sprites, canvas);

// UI Entities (Simplified for now, can be extracted)
const startMessage = {
  spriteX: 134,
  spriteY: 0,
  width: 176,
  height: 152,
  x: canvas.width / 2 - 176 / 2,
  y: 100,
  draw() {
    context.drawImage(
      sprites,
      this.spriteX,
      this.spriteY,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  },
};

const gameOverMessage = {
  spriteX: 134,
  spriteY: 153,
  width: 226,
  height: 200,
  x: canvas.width / 2 - 226 / 2,
  y: 100,
  draw() {
    context.drawImage(
      sprites,
      this.spriteX,
      this.spriteY,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );

    // Draw Score on Game Over
    context.fillStyle = "black";
    context.textAlign = "right";
    context.font = '17px "VT323"';
    // Note: Score drawing is handled in ScreenManager or ScoreManager, but here for the static message part
  },
  update(score, bestScore) {
    // Update logic if needed (e.g. new high score animation)
  },
};

const medals = {
  width: 44,
  height: 44,
  x: 73,
  y: 187,
  locations: [
    { spriteX: 0, spriteY: 78 },
    { spriteX: 48, spriteY: 78 },
    { spriteX: 0, spriteY: 124 },
    { spriteX: 48, spriteY: 124 },
  ],
  draw(score) {
    let m = 0;
    if (score >= 100) m = 3;
    else if (score >= 70) m = 2;
    else if (score >= 40) m = 1;

    const { spriteX, spriteY } = this.locations[m];
    context.drawImage(
      sprites,
      spriteX,
      spriteY,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  },
};

const scoreManager = {
  score: 0,
  bestScore: 0,
  draw() {
    context.font = '35px "VT323"';
    context.textAlign = "right";
    context.fillStyle = "#fff";
    context.fillText(`${this.score}`, canvas.width - 10, 35);

    if (screenManager.activeScreen === screenManager.screens.GAME_OVER) {
      context.fillStyle = "black";
      context.font = '17px "VT323"';
      context.fillText(`${this.score}`, canvas.width / 2 + 90, 190);
      context.fillText(`${this.bestScore}`, canvas.width / 2 + 90, 230);
    }
  },
  update(bird, pipes) {
    if (pipes.pairs.length > 0) {
      const pipe = pipes.pairs[0];
      // Simple score logic: if bird passes pipe.
      // Original logic: if(bird.x === sensor) where sensor = pipe.x
      // We can check if bird.x passed pipe.x
      if (bird.x === pipe.x) {
        // Exact match might be tricky with float speeds, but original used int/exact match
        this.score++;
      }
    }

    if (this.score > this.bestScore) {
      this.bestScore = this.score;
    }
  },
  reset() {
    this.score = 0;
  },
};

const entities = {
  background,
  floor,
  bird,
  pipes,
  startMessage,
  gameOverMessage,
  medals,
  get frame() {
    return frame;
  },
  set frame(value) {
    frame = value;
  },
  get speed() {
    return speed;
  },
};

const screenManager = new ScreenManager(
  context,
  canvas,
  entities,
  scoreManager,
  soundEffects
);
screenManager.switchScreen(screenManager.screens.START);

function loop() {
  screenManager.activeScreen.update();
  screenManager.activeScreen.draw();
  frame++;
  requestAnimationFrame(loop);
}

function handleInput() {
  if (screenManager.activeScreen && screenManager.activeScreen.click) {
    screenManager.activeScreen.click();
  }
}

canvas.addEventListener("pointerdown", handleInput);

window.addEventListener("keydown", (e) => {
  if (e.code === "Space" || e.code === "ArrowUp") {
    handleInput();
  }
});

loop();
