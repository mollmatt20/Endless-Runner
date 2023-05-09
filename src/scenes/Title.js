class Title extends Phaser.Scene {
    constructor() {
        super('titleScene');
    }

    create() {
        let menuConfig = {
            fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',
            fontSize: '25px',
            color: '#FFFFFF',
            align: 'right',
            fixedWidth: 0
        }
        this.add.text(130, 35, 'Endless Runner', menuConfig).setOrigin(0.5);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        // pass to play scene
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start('playScene');
        }
    }
}