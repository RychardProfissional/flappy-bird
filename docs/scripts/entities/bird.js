class Bird {
  constructor(context, sprites) {
    this.context = context;
    this.sprites = sprites;
    this.width = 34;
    this.height = 24;
    this.x = 20;
    this.y = 50;
    this.gravity = 0.15;
    this.velocity = 0;
    this.jumpForce = 3.5;
    this.currentFrame = 0;

    this.movement = [
      { spriteX: 0, spriteY: 0 },
      { spriteX: 0, spriteY: 26 },
      { spriteX: 0, spriteY: 52 },
      { spriteX: 0, spriteY: 26 },
    ];
  }

  update() {
    this.velocity += this.gravity;
    this.y += this.velocity;
  }

  draw(frame, isStopped) {
    const frameInterval = 10;

    if (frame % frameInterval === 0 && !isStopped) {
      const nextFrame = this.currentFrame + 1;
      this.currentFrame = nextFrame >= this.movement.length ? 0 : nextFrame;
    }

    const { spriteX, spriteY } = this.movement[this.currentFrame];

    this.context.drawImage(
      this.sprites,
      spriteX,
      spriteY,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  jump() {
    this.velocity = -this.jumpForce;
  }

  reset() {
    this.y = 50;
    this.velocity = 0;
    this.currentFrame = 0;
  }
}
