//
// Matthew Guo
//
// Endless Runner Title: The Endless Burger Ingredients and an Egg-shaped Dog
//
// Hours spent on assignment: 20 hours
//
// Two creative tilts I implemented is having random platforms spawing instead of using one-type and
// having a visual style and music that matches the theme of the game. My endless runner is platform-based
// and utilizes 4 different platforms that differentiates by length. I used a random number generator and 
// if statements that will choose a random platform from the texture atlas. The art has a cute and goofy style
// with music similar to 8-bit.
//
// Royalty-free music used: https://freesound.org/s/677187/


// define and configure main Phaser game object
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
let cursors;
let level = 0;
let highScore = 0;
let keySPACE;
// define game
let game = new Phaser.Game(config);