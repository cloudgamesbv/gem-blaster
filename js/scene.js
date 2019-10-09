class Scene extends PIXI.Container {
  init() {
    this.buildScene();
    this.onRotate();
  }

  buildScene() {
    this.buildBackground();
    this.buildGrid();
  }

  buildBackground() {
    this.background = new PIXI.Sprite(backgroundTexture);
    this.background.anchor.set(0.5);
    this.background.x = canvas.width / 2;
    this.background.y = canvas.height / 2;

    this.addChild(this.background);
  }

  buildGrid() {
    this.grid = new Grid();
    this.addChild(this.grid);
  }

  onRotate() {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;

    if (this.background) {
      this.background.x = canvas.width / 2;
      this.background.y = canvas.height / 2;
    }
  }
}
