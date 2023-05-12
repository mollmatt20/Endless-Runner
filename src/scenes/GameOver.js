class GameOver extends Phaser.Scene {
    constructor() {
        super('gameoverScene');
    }

    create() {
        // Font settings for text to display
        let gameOverConfig = {
            fontFamily: 'Caveat',
            fontSize: '40px',
            color: '#FFFFFF',
            align: 'center',
            fixedWidth: 0
        }
        this.sound.play('game_over');
        this.add.text(game.config.width/2, game.config.height/2 - 100, 'Game Over!', gameOverConfig).setOrigin(0.5);
        gameOverConfig.color = '#3CB043';
        this.add.text(game.config.width/2, game.config.height/2, `High Score: ${highScore}`, gameOverConfig).setOrigin(0.5);
        gameOverConfig.color = '#FFFFFF';
        this.add.text(game.config.width/2, game.config.height/2 + 100, 'Press SPACE to Play Again', gameOverConfig).setOrigin(0.5);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update() {
        // Press SPACE to restart the game
        if(Phaser.Input.Keyboard.JustDown(keySPACE)){
            this.sound.play('select');
            this.scene.start('playScene');
        }
    }
}