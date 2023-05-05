class Play extends Phaser.Scene {
    constructor() {
        super('playScene');
    }

    create() {
        // speed and world settings
        this.jumpVel = -700;
        this.maxJumps = 1;
        this.physics.world.gravity.y = 1000;

        // set up player
        this.player = this.physics.add.sprite(0, game.config.height/2, 'platformer_atlas', 'front').setScale(0.5);
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

        // set up platform
        this.startPlatform = new Platform(this, 0, game.config.height);
        this.startPlatform.setScale(3);
        this.startPlatform.setVelocityX(0);

        this.physics.add.collider(this.player, this.startPlatform);

        // set up plaform group
        this.platformGroup = this.add.group({
            runChildUpdate : true
        });

        this.timeAddPlatform = this.time.delayedCall(2500, () => {
            this.makePlatform();
        })
         
        // set up cursor inputs
        cursors = this.input.keyboard.createCursorKeys();
    }

    makePlatform() {
        let platform = new Platform(this, game.config.width + 35, Phaser.Math.Between(150, game.config.height - 16));
        this.platformGroup.add(platform);
        this.physics.add.collider(this.player, platform);
    }

    update() {
        // set up player input
        if(cursors.left.isDown) {
            this.player.body.setVelocityX(-300);
            this.player.setFlip(true, false);
            this.player.anims.play('walk', true);
        } else if(cursors.right.isDown) {
            this.player.body.setVelocityX(300);
            this.player.resetFlip();
            this.player.anims.play('walk', true);
        } else {
            this.player.body.setVelocityX(0);
            this.player.anims.play('idle');
        }

        this.isGrounded = this.player.body.touching.down;
        if(!this.isGrounded) {
            this.player.anims.play('jump', true);
        }

        if(this.isGrounded && Phaser.Input.Keyboard.JustDown(cursors.up)) {
	    	this.player.body.setVelocityY(this.jumpVel);
	    }
    }        
}
