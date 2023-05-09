class Load extends Phaser.Scene {
    constructor() {
        super('loadScene');
    }

    preload() {
        // set load path
        this.load.path = './assets/';
        // load our assets
        this.load.atlas('platformer_atlas', 'kenny_sheet.png', 'kenny_sheet.json');
        this.load.image('platform', 'platform.png');
    }

    create() {
        // pass to title screen
        this.scene.start('titleScene');
    }
}
