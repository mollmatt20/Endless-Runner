class Play extends Phaser.Scene {
    constructor() {
        super('playScene');
    }

    create() {
        // speed and world settings
        this.jumpVel = -700;
        this.platformSpeed = -100;
        this.maxJumps = 1;
        this.physics.world.gravity.y = 3000;
        this.isJumping = false;
        this.maxJumps = 1;

        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '25px',
            backgroundColor: '#FFFFFF',
            color: '#843605',
            align: 'left',
            fixedWidth: 150
        }
        // score counter
        this.score = 0
        
        // set up player
        this.player = this.physics.add.sprite(0, game.config.height/2, 'ER_atlas', 'front').setScale(0.5);
        this.player.setCollideWorldBounds(true);
        this.player.setMaxVelocity(500, 5000);

        // set up player animation
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNames('ER_atlas', {
                prefix: 'walk',
                start: 1,
                end: 2,
            }),
            defaultTextureKey: 'ER_atlas',
            frameRate: 30,
            repeat: -1
        });
        this.anims.create({
            key: 'idle',
            defaultTextureKey: 'ER_atlas',
            frames: [
                { frame: 'front' }
            ],
            repeat: -1
        });
        this.anims.create({
            key: 'jump',
            defaultTextureKey: 'ER_atlas',
            frames: [
                { frame: 'jump' }
            ],
        });

        // set up platform
        this.startPlatform = new Platform(this, game.config.height, 0);
        this.startPlatform.x = 0;
        this.startPlatform.setScale(3);

        this.physics.add.collider(this.player, this.startPlatform);

        // set up plaform group
        this.platformGroup = this.add.group({
            runChildUpdate : true
        });

        this.time.delayedCall(2500, () => {
            this.makePlatform();
        })
        
        this.difficultyTimer = this.time.addEvent({
            delay: 1000,
            callback: () => {
            // Platform speed up for every 5 levels
                level++;
                if (level % 10) {
                    this.platformSpeed -= 5;
                }
            },
            callbackScope: this,
            loop: true
        });

        // set up scoreboard
        this.scoreBoard = this.add.text(game.config.width - 160, 10, `Score: ${this.score}`, scoreConfig);
        this.scoring = this.time.addEvent({
            delay: 1000,
            callback: () => {
                this.score += 1;
                this.scoreBoard.text = `Score: ${this.score}`;
            },
            callbackScope: this,
            loop: true
        });

        // set up cursor inputs
        cursors = this.input.keyboard.createCursorKeys();
    }

    makePlatform() {
        let randoVal = Phaser.Math.Between(0, 3);
        let platName;
        if(randoVal == 0) {
            platName = 'Platform_Patty';
        } 
        if(randoVal == 1) {
            platName = 'Platform_Cheese';
        }
        if(randoVal == 2) {
            platName = 'Platform_Lettuce';
        }
        if(randoVal == 3) {
            platName = 'Platform_Pickle';
        }
        console.log(platName);
        let platformHeight = Phaser.Math.Between(200, game.config.height - 50);
        let platform = new Platform(this, platformHeight, this.platformSpeed, platName);
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

        //  set up varaible jump
        this.isGrounded = this.player.body.touching.down;
        if(!this.isGrounded) {
            this.player.anims.play('jump', true);
            this.isJumping = true;
        } else {
            this.isJumping = false;
            this.numJumps = this.maxJumps;

        }

        if(this.numJumps > 0 && Phaser.Input.Keyboard.DownDuration(cursors.up, 400)) {
	    	this.player.body.setVelocityY(this.jumpVel);
            this.isJumping = true;
	    }

        if(this.isJumping && Phaser.Input.Keyboard.UpDuration(cursors.up)) {
            this.numJumps--;
            this.isJumping = false;
        }

        if(this.score > highScore) {
            highScore = this.score;
        }

        // if player falls to the bottom screen, pass to game over screen
        if(this.player.y == 477) {
            this.scene.start('gameoverScene');
        }
    }        
}
