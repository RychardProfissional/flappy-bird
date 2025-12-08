class Background {
  constructor(context, sprites, canvas) {
    this.context = context;
    this.sprites = sprites;
    this.canvas = canvas;
    this.spriteX = 390;
    this.spriteY = 0;
    this.width = 274;
    this.height = 202;
    this.x = 0;
    this.y = canvas.height - 202;
  }

  draw() {
    this.context.fillStyle = "#70c5ce";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

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
