// define and configure main Phaser game object
let cursors;
let config = {
    parent: 'myGame',
    type: Phaser.AUTO,
    height: 500,
    width: 640,
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
    scene: [ Load, Title, Play, GameOver ]
}

// global variables
let level = 0;
let highScore = 0;
let keySPACE;
// define game
let game = new Phaser.Game(config);