class GameOver extends Phaser.Scene {
    constructor() {
        super('gameoverScene');
    }

    create() {
        this.add.text(130, 35, 'Game Over').setOrigin(0.5);
        this.add.text(130, 50, `High Score: ${highScore}`).setOrigin(0.5);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keySPACE)){
            this.scene.start('playScene');
        }
    }
}