$( document ).ready(function() {
  // 700x480 game board with 28x32 sprite = 25x15 grid
var game = new Phaser.Game(700, 480, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
  game.load.image("dakysprite", "assets/dakysprite.png");
  game.load.tilemap("dakygrid", "assets/tiles/dakygrid.json", null, Phaser.Tilemap.TILED_JSON);
  game.load.image("tiles", "assets/tiles/grass-tiles-2-small.png");
}
var grid;
function create() {
  grid = game.add.tilemap("dakygrid");
  grid.addTilesetImage("grass", "tiles");
  game.add.sprite(650, 450, 'dakysprite');
}

function update() {
}
});
