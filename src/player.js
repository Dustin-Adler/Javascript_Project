

class Player {

    constructor(ctx, canvas) {
        this.mcSprite = new Image();
        this.mcSprite.src = "./Assets/tileset/mcMasterSheet.png";
        this.ctx = ctx;
        this.w = 16; 
        this.h = 17; 
        this.x = 120;  
        this.y = 191; 
        this.speed = 2;  
        this.dx =  0; 
        this.dy = 0; 
        this.animationCount = 0;
        this.canvas = canvas;
        this.keyDown = this.keyDown.bind(this);
        this.keyUp = this.keyUp.bind(this);
        this.keys = [];
        this.lastInput = "up";
        this.moving = false;
    }

    draw(img, sx, sy, sw, sh, dx, dy, dw, dh) {
        this.ctx.drawImage( img, sx, sy, sw, sh, dx, dy, dw, dh)
    }

    update() {
        this.draw(this.mcSprite, this.dx * this.w, this.dy * this.h, this.w, this.h, this.x, this.y, this.w, this.h);
        this.move();
        this.animationFrame();
    }

    keyDown(e) {
        this.keys[e.keyCode] = true;
        this.moving = true;
    }

    keyUp(e){
        delete this.keys[e.keyCode];
        this.moving = false;
    }

    move(){
        if (this.keys[38] && this.y > 32) {
            this.y -= this.speed;
            this.lastInput = "up"
            this.dy = 0
        } 
         if(this.keys[40] && this.y < (240 - 32) - this.h) {
            this.y += this.speed;
            this.lastInput = "down"
            this.dy = 3
        } 
        if(this.keys[39] && this.x < (256 - 16) - this.w) {
            this.x += this.speed;
            this.lastInput = "right"
            this.dy = 1
        } 
        if(this.keys[37] && this.x > 16) {
            this.x -= this.speed;
            this.lastInput = "left"
            this.dy = 2
        } 
    } 

    animationFrame(){
        if (this.moving) {
            if (this.animationCount < 4) {
                this.animationCount++;
            } else if (this.dx < 5) {
                this.dx++
                this.animationCount = 0;
            } else {
                this.dx = 0;
                this.animationCount = 0;
            } 
        } else if (this.lastInput === "up") {
            this.dy = 4;
            if (this.animationCount < 4) {
                this.animationCount++;
            } else if (this.dx < 5) {
                this.dx++
                this.animationCount = 0;
            } else {
                this.dx = 0;
                this.animationCount = 0;
            } 
        } else if (this.lastInput === "right") {
            this.dy = 5;
            if (this.animationCount < 4) {
                this.animationCount++;
            } else if (this.dx < 5) {
                this.dx++
                this.animationCount = 0;
            } else {
                this.dx = 0;
                this.animationCount = 0;
            }
        } else if (this.lastInput === "left") {
            this.dy = 6;
            if (this.animationCount < 4) {
                this.animationCount++;
            } else if (this.dx < 5) {
                this.dx++
                this.animationCount = 0;
            } else {
                this.dx = 0;
                this.animationCount = 0;
            }
        } else if (this.lastInput === "down") {
            this.dy = 7;
            if (this.animationCount < 4) {
                this.animationCount++;
            } else if (this.dx < 5) {
                this.dx++
                this.animationCount = 0;
            } else {
                this.dx = 0;
                this.animationCount = 0;
            }
        }
    }
} 

export default Player;


