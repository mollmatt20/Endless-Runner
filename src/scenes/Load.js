class Load extends Phaser.Scene {
    constructor() {
        super('loadScene');
    }

    preload() {
        // set load path
        this.load.path = './assets/';
        // load our assets
        this.load.atlas('platformer_atlas', 'kenny_sheet.png', 'kenny_sheet.json');
        this.load.image('ground', 'ground.png');
    }

    create() {
        // pass to play scene
        this.scene.start('playScene');
    }
}