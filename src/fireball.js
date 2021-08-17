class Fireball {

    constructor(ctx, canvas, startX, startY, targetX, targetY){
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
        this.animationCount = 0;
        // this.speed = 3;
    }

    drawFireBall(){
        this.draw(this.fireball, this.dx * this.w, this.dy, 
        this.w, this.h, this.x, 
        this.y, this.w, this.h )
    }

    moveFireBall(){ 
        // let adj, opp, angle;
        // if (this.x > this.targetX) {
        //     opp = this.x - this.targetX;
        // } else {
        //     opp = this.targetX - this.x;
        // }

        // if (this.y > this.targetY) {
        //     adj = this.y - this.targetY;
        // } else {
        //     adj = this.targetY - this.y;
        // }
        angle = Math.atan2(this.targetY - this.y, this.targetX - this.x)  
        this.x += this.x + Math.cos(angle),
        this.y += this.y + Math.sin(angle)

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
        this.moveFireBall();
        this.animateFireball();
        this.drawFireBall();
    }
}