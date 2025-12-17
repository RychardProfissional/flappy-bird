class ScreenManager {
  constructor(context, canvas, entities, scoreManager, soundEffects) {
    this.context = context;
    this.canvas = canvas;
    this.entities = entities;
    this.scoreManager = scoreManager;
    this.soundEffects = soundEffects;
    this.activeScreen = null;
    this.screens = {
      START: {
        draw: () => {
          this.entities.background.draw();
          this.entities.floor.draw();
          this.entities.bird.draw(0, false); // Idle bird
          this.entities.startMessage.draw();
        },
        update: () => {
          // this.entities.floor.update(this.entities.speed);
        },
        click: () => {
          this.switchScreen(this.screens.GAME);
        },
      },
      GAME: {
        draw: () => {
          this.entities.background.draw();
          this.entities.pipes.draw();
          this.entities.floor.draw();
          this.entities.bird.draw(this.entities.frame, false);
          this.scoreManager.draw();
        },
        update: () => {
          this.entities.pipes.update(this.entities.frame, this.entities.speed);
          this.entities.floor.update(this.entities.speed);
          this.entities.bird.update();
          this.scoreManager.update(this.entities.bird, this.entities.pipes);

          // Collision with Floor
          if (
            checkFloorCollision(
              this.entities.bird,
              this.entities.floor,
              this.canvas.height
            )
          ) {
            this.soundEffects.hit.play();
            this.switchScreen(this.screens.GAME_OVER);
            return;
          }

          // Collision with Pipes
          const currentPipe = this.entities.pipes.pairs[0];
          if (currentPipe) {
            if (
              checkCollision(
                this.entities.bird,
                currentPipe,
                this.entities.pipes
              )
            ) {
              this.soundEffects.hit.play();
              this.switchScreen(this.screens.GAME_OVER);
            }
          }
        },
        click: () => {
          this.entities.bird.jump();
        },
      },
      GAME_OVER: {
        draw: () => {
          this.entities.gameOverMessage.draw();
          this.entities.medals.draw(this.scoreManager.score);
          this.scoreManager.draw();
        },
        update: () => {
          this.entities.gameOverMessage.update(
            this.scoreManager.score,
            this.scoreManager.bestScore
          );
        },
        click: () => {
          this.switchScreen(this.screens.START);
        },
      },
    };
  }

  switchScreen(newScreen) {
    this.activeScreen = newScreen;
    if (this.activeScreen === this.screens.START) {
      this.resetGame();
    }
  }

  resetGame() {
    this.entities.bird.reset();
    this.entities.pipes.reset();
    this.scoreManager.reset();
    this.entities.frame = 0;
  }
}
