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
        this.load.audio('music_background', 'ER_music.wav');
        this.load.audio('chew', 'Chew.wav');
        this.load.audio('game_over', 'Game_over.wav');
        this.load.audio('select', 'Select.wav');
        this.load.image('background', 'Test_background.png');
        this.load.image('scroll', 'Scrolling_air.png');
        // load remote Web Font Loader script
        this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
    }

    create() {
        let currentScene = this;
        // load Google fonts using Web Font Loader
        window.WebFont.load({
            google: {
                families: [ 'Caveat' ]
            },
            active: function() {
                // start title scene
                currentScene.scene.start('titleScene');
            }
        });
    }
}
