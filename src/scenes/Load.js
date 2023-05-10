class Load extends Phaser.Scene {
    constructor() {
        super('loadScene');
    }

    preload() {
        // set load path
        this.load.path = './assets/';
        // load our assets
        this.load.atlas('ER_atlas', 'ER_sheet.png', 'ER_sheet.json');
        this.load.atlas('platform_atlas', 'platforms.png', 'platforms.json');
    }

    create() {
        // pass to title screen
        this.scene.start('titleScene');
    }
}
