class Play extends Phaser.Scene {
    constructor() {
        super('playScene');
    }

    create() {
        // speed and world settings
        this.acceleration = 500;
        this.physics.world.gravity.y = 1000;

        // set up player
        this.player = this.physics.add.sprite(game.config.width/2, game.config.height/2, 'platformer_atlas', 'front').setScale(0.5);
        this.player.setCollideWorldBounds(true);
        // set up player animation
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNames('platformer_atlas', {
                prefix: 'walk',
                start: 1,
                end: 11,
                suffix: '',
                zeroPad: 4 
            }),
            frameRate: 30,
            repeat: -1
        });
        this.anims.create({
            key: 'idle',
            defaultTextureKey: 'platformer_atlas',
            frames: [
                { frame: 'front' }
            ],
            repeat: -1
        });
        // won't need this for now, but we're taking care of it for a future scene
        this.anims.create({
            key: 'jump',
            defaultTextureKey: 'platformer_atlas',
            frames: [
                { frame: 'jump' }
            ],
        });

        // set up cursor inputs
        cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        // set up player input
        if(cursors.left.isDown) {
            this.player.body.setAcceleration(-this.acceleration);
            this.player.setFlip(true, false);
            this.player.anims.play('walk', true);
        }
    }
}
