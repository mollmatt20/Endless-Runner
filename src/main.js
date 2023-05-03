// define and configure main Phaser game object
let cursors;
let config = {
    parent: 'myGame',
    type: Phaser.WEBGL,
    height: 640,
    width: 960,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            //debug: true,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: [ Load, Play, Title ]
}

// define game
let game = new Phaser.Game(config);