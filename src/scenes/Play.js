// Play.js
class Play extends Phaser.Scene {
    constructor(){
        super("playScene");
    }

    preload() {
        this.load.image('wizard', 'assets/wizard.png');
        this.load.image('background', 'assets/forest_background.png');
        this.load.image('slime', 'assets/slime.png');
    }

    create() {
        this.background = this.add.tileSprite(50, 50, 800, 500, 'background').setOrigin(0, 0);
        this.player = new Wizard(this, game.config.width/2, game.config.height - borderUISize -borderPadding -200, 'wizard').setOrigin(0.5, 0);
        this.slime = new Slime(this, game.config.width/2, game.config.height/2, 'slime').setOrigin(0.5, 0);

        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    }

    update() {
        this.player.update();
        this.slime.update();

        if (this.checkCollision(this.player, this.slime)) {
            console.log("hit");
        }
    }

    checkCollision(player, entity) {
        if (player
            .x < entity.x + entity.width &&
                        player
            .x + player
            .width > entity.x &&
                        player
            .y < entity.y + entity.height &&
                        player
            .height + player
            .y > entity.y) {
                            return true;
                    } else {
                        return false;
                    }
    }

}