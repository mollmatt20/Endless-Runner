class Title extends Phaser.Scene {
    constructor() {
        super('titleScene');
    }

    create() {
        // Font settings for displaying text
        let menuConfig = {
            fontFamily: 'Caveat',
            fontSize: '40px',
            color: '#FFFFFF',
            align: 'center',
            fixedWidth: 0
        }
        this.add.text(game.config.width/2, game.config.height/2 - 150, 'The Endless Burger Ingredients\nand\nan Egg-shaped Dog', menuConfig).setOrigin(0.5);
        menuConfig.fontSize = '30px';
        this.add.text(game.config.width/2, game.config.height/2 + 150, 'Press SPACE to Play\nUse Arrow Keys to Move and Jump\nStay onto Platforms to Survive\n(5 Seconds on Your Starting Platform)', menuConfig).setOrigin(0.5);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update() {
        // Pass to play scene when pressing SPACE
        if(Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.sound.play('select');
            this.scene.start('playScene');
        }
    }
}