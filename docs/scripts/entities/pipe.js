class Pipes {
  constructor(context, sprites, canvas) {
    this.context = context;
    this.sprites = sprites;
    this.canvas = canvas;
    this.width = 52;
    this.height = 400;
    this.gap = 90;
    this.pairs = [];
    this.frameInterval = 100;

    this.topPipe = { spriteX: 52, spriteY: 169 };
    this.bottomPipe = { spriteX: 0, spriteY: 169 };
  }

  draw() {
    this.pairs.forEach((pair) => {
      const randomY = pair.y;
      const spacing = this.gap;
      const pipeX = pair.x;
      const topPipeY = randomY;
      const bottomPipeY = randomY + this.height + spacing;

      // Top Pipe
      this.context.drawImage(
        this.sprites,
        this.topPipe.spriteX,
        this.topPipe.spriteY,
        this.width,
        this.height,
        pipeX,
        topPipeY,
        this.width,
        this.height
      );

      // Bottom Pipe
      this.context.drawImage(
        this.sprites,
        this.bottomPipe.spriteX,
        this.bottomPipe.spriteY,
        this.width,
        this.height,
        pipeX,
        bottomPipeY,
        this.width,
        this.height
      );
    });
  }

  update(frame, speed) {
    // Add new pipes
    if (frame % this.frameInterval === 0) {
      this.pairs.push({
        x: this.canvas.width,
        y: (Math.random() + 1) * -150,
        scored: false,
      });
    }

    // Move pipes and remove off-screen ones
    this.pairs.forEach((pair) => {
      pair.x -= speed;
    });

    if (this.pairs.length && this.pairs[0].x + this.width <= 0) {
      this.pairs.shift();
    }
  }

  reset() {
    this.pairs = [];
  }
}
