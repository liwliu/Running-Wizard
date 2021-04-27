// main.js
let config = {
    type: Phaser.CANVAS, 
    width: 1080,
    height: 720,
    scene: [Menu, Play]
}

let game = new Phaser.Game(config);

let borderUISize = game.config.height /15;
let borderPadding = borderUISize / 3;
let scrollSpeed = 1;

let highScore = 0;
let p1Score;

