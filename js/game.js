// load images
const backgroundTexture = PIXI.Texture.from('img/background.jpg');

const gemTextures = [
  PIXI.Texture.from('img/gem_blue.png'),
  PIXI.Texture.from('img/gem_green.png'),
  PIXI.Texture.from('img/gem_orange.png'),
  PIXI.Texture.from('img/gem_purple.png'),
  PIXI.Texture.from('img/gem_red.png'),
  PIXI.Texture.from('img/gem_yellow.png'),
];

const canvas = document.getElementById('canvas');
const app = new PIXI.Application({ view: canvas });
const stage = app.stage;

const scene = new Scene();
stage.addChild(scene);

scene.init();

window.addEventListener('resize', () => {
  scene.onRotate();
});
