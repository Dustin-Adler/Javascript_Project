class Fireball {

    constructor(ctx, canvas, startX, startY, targetX, targetY) {
        this.fireball = new Image();
        this.fireball.src = "./Assets/tileset/fireballs.png";
        this.ctx = ctx;
        this.canvas = canvas;
        this.w = 8;
        this.h = 10;
        this.x = startX;
        this.y = startY;
        this.targetX = targetX;
        this.targetY = targetY;
        this.dx = 0;
        this.dy = 0;
        this.velocityX = 0;
        this.velocityY = 0;
        this.animationCount = 0;
    }

    draw(img, sx, sy, sw, sh, dx, dy, dw, dh) {
        this.ctx.drawImage( img, sx, sy, sw, sh, dx, dy, dw, dh)
    }

    drawFireBall(){
        this.draw(this.fireball, this.dx * this.w, this.dy, 
        this.w, this.h, this.x, 
        this.y, this.w, this.h )
    }

    getVelocity(){
        const angle = Math.atan2( this.targetY - this.y, this.targetX - this.x)
        this.velocityX = Math.cos(angle)
        this.velocityY = Math.sin(angle)
    }

    moveFireBall(){ 
        this.x += this.velocityX;
        this.y += this.velocityY;
    }

    animateFireball() {
        if (this.animationCount < 4) {
            this.animationCount++;
        } else if (this.dx < 3) {
            this.dx++;
            this.animationCount = 0;
        } else {
            this.dx = 0;
            this.animationCount = 0;
        }
    }

    update(){
        this.drawFireBall();
        this.moveFireBall();
        this.animateFireball();
    }
}

export default Fireball;