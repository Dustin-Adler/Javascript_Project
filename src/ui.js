class Ui {
    constructor(ctx, canvas){
        this.healthBar = new Image();
        this.healthBar.src = "Assets/tileset/heart-containers.png";
        this.swordButton = new Image();
        this.swordButton.src = "Assets/Other/better-sword.png"
        this.ctx = ctx;
        this.canvas = canvas;
    }

    draw(img, sx, sy, sw, sh, dx, dy, dw, dh) {
        this.ctx.drawImage( img, sx, sy, sw, sh, dx, dy, dw, dh)
    }

    drawHealthBar(playerHealth) {
        this.draw(this.healthBar, 0 , playerHealth * 17, 85, 17, 153, 7, 85, 17)
    }

    drawAttackOptions() {
        this.draw(this.swordButton, 0, 0, 18, 28, 18, 0, 18, 28)
    }

    update(player){
        this.drawHealthBar(player.health);
        this.drawAttackOptions();
    }

}

export default Ui;