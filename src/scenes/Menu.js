// Menu.js
class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene");
    }

    preload() {
        // load all assets here for the menu screen
        this.load.image('title', 'assets/Title page.png');
    }

    create() {
        let menuConfig = {
            fontFamily: 'BAUHS93',
            fontSize: '28px',
            backgroundColor: '#4488AA',
            color: '#FFFFFF',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // menu text
        //this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'Running Wizard', menuConfig).setOrigin(0.5, 0);
        this.add.tileSprite(0,0, 900,600, 'title').setOrigin(0, 0);

        this.add.text(game.config.width/2, game.config.height/2, 'Press SPACE', menuConfig).setOrigin(0.5);

        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start('playScene');
        }
    }
}