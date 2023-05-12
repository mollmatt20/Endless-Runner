class Platform extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, height, velocity, platform) {
        super(scene, game.config.width + 35, height, 'platform_atlas', platform);

        scene.add.existing(this);
        this.parentScene = scene;
        this.parentScene.add.existing(this);
        this.parentScene.physics.add.existing(this);
        this.setVelocityX(velocity);
        this.setImmovable();
        this.body.allowGravity = false;
        this.newPlatform = true;
        this.sfxChew = scene.sound.add('chew');
    }

    update() {
        // add new platform when the previous passes the center screen
        if(this.newPlatform && this.x < game.config.width/2) {
            this.parentScene.makePlatform(this, this.velocity);
            this.newPlatform = false;
        }

        // destroy platform if it reaches to left edge
        if(this.x < -this.width) {
            this.destroy();
            this.sfxChew.play();
        }
    }
}