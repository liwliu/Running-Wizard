// main.js
let config = {
    type: Phaser.CANVAS, 
    width: 900,
    height: 600,
    scene: [Menu, Play]
}

let game = new Phaser.Game(config);

let borderUISize = game.config.height /15;
let borderPadding = borderUISize / 3;
let scrollSpeed = 1;

let keySPACE, keyUP, keyDOWN;

let highScore = 0;
let playerScore;

