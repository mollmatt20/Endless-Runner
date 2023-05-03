class Title extends Phaser.Scene {
    constructor() {
        super('titleScene');
    }

    create() {
        this.add.text(20, 20, "Endless Runner Menu");
    }
}