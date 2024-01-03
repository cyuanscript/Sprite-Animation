class KingSlime {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./KingSlime.png"), 0, 0, 250, 332, 7, 0.2);
        this.x = 700;
        this.y = 0;
        this.speed = -45;
    };

    update() {
        this.x += this.speed * this.game.clockTick;
        if(this.x < -250) this.x = 700
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };

}