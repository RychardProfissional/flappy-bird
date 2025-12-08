class Floor {
  constructor(context, sprites, canvas) {
    this.context = context;
    this.sprites = sprites;
    this.canvas = canvas;
    this.spriteX = 0;
    this.spriteY = 610;
    this.width = 224;
    this.height = 112;
    this.x = 0;
    this.y = canvas.height - 112;
  }

  update(speed) {
    const repeatX = this.width / 2;
    const movement = this.x - speed;

    // Infinite loop logic
    this.x = movement % repeatX;
  }

  draw() {
    this.context.drawImage(
      this.sprites,
      this.spriteX,
      this.spriteY,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );

    this.context.drawImage(
      this.sprites,
      this.spriteX,
      this.spriteY,
      this.width,
      this.height,
      this.x + this.width,
      this.y,
      this.width,
      this.height
    );
  }
}
