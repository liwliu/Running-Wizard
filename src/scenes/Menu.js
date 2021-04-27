// Menu.js
class Menu extends Phaser.Scenes{
    constructor(){
        super("menuScene");
    }

    preload() {
        // load all assets here for the menu screen

    }

    create() {
        let menuConfig = {
            fontFamily: 'Coursier',
            fontSize: '28px',
            backgroundColor: '#D84141',
            color: '#FFFFFF',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
    }

    update() {

    }
}