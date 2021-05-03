class Potion extends Phaser.GameObjects.Sprite {
    constructir(scene, x, y, texture, frame, type) {
        super(scene, x, y, texture, frame, type);

        scene.add.existing(this);
        
    }

    update() {

    }

    reset() {
        
    }
}