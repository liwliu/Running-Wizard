// Wizard.js
class Wizard extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        this.isFiring = false;
        this.moveSpeed = 2;
        this.lives = 3;

    }


    update() {

        if(keyUP.isDown ){//&& this.y >= borderUISize + this.width) {
            this.y -= this.moveSpeed;
        } else if(keyDOWN.isDown && this.y <= game.config.width - borderUISize) {
            this.y += this.moveSpeed
        }
    }


}