// Wizard.js
class Wizard extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        this.isFiring = false;
        this.moveSpeed = 2;

    }

    create() {
        cursors = this.input.keyboard.createCursorKeys();
        

    }

    update() {

        if(cursors.up.isDown && this.y >= borderUISize + this.width) {
            this.y += this.moveSpeed;
        } else if(cursors.down.isDown && this.y <= game.config.width - borderUISize) {
            this.y -= this.moveSpeed
        }
    }


}