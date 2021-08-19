import Sound from "./sound";

class Player {

    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.sounds = new Sound();
        this.mcSprite = new Image();
        this.mcSprite.src = "./Assets/tileset/mcMasterSheet.png";
        this.left_right_attack = new Image();
        this.left_right_attack.src = "./Assets/tileset/right-left-atk.png"
        this.up_down_attack = new Image();
        this.up_down_attack.src = "./Assets/tileset/up-down-atk.png"
        this.dx = 0; 
        this.dy = 0; 
        this.animationCount = 0;
        this.w = 16; 
        this.h = 17; 
        this.x = 120;  
        this.y = 191; 
        this.speed = 2;  
        this.health = 0;
        this.keyDown = this.keyDown.bind(this);
        this.keyUp = this.keyUp.bind(this);
        this.keys = [];
        this.lastInput = "up";
        this.moving = false;
        this.attacking = false;
        this.dead = false;
        this.hurtBox = {
            w: 8,
            h: 16,
            x: this.x - 8, 
            y: this.y
        }
    }

    update() {
        this.draw();
        this.move();
        this.animationFrame();
        this.deathCheck()
    }

    
    keyDown(e) {
        this.keys[e.keyCode] = true;
        this.moving = true;
    }

    keyUp(e){
        delete this.keys[e.keyCode];
        this.moving = false;
        this.attacking = false
        this.hurtBox.w = 0;
        this.hurtBox.h = 0;
    }

    deathCheck() {
        if (this.health >= 10) {
            this.dead = true;
            this.sounds.deathSound()
            // this.sounds.startBattleSong.stop
        }
    }

    draw() {
        if (this.attacking && this.lastInput === "down"){
            this.ctx.drawImage( this.up_down_attack, this.dx * 23, this.dy * 23, 23, 23, this.x, this.y, 23, 23)
            
        } else if (this.attacking && this.lastInput === "up") {
            this.ctx.drawImage( this.up_down_attack, this.dx * 23, this.dy * 23, 23, 23, (this.x - 8) , (this.y - 8), 23, 23)
        
        } else if (this.attacking && this.lastInput === "left") {
            this.ctx.drawImage( this.left_right_attack, this.dx * this.w, this.dy * 21, this.w, 21, this.x, this.y, this.w, 21)

        } else if (this.attacking && this.lastInput === "right") {
            this.ctx.drawImage( this.left_right_attack, this.dx * this.w, this.dy * 21, this.w, 21, this.x, this.y, this.w, 21)

        }else {
            this.ctx.drawImage( this.mcSprite, this.dx * this.w, this.dy * this.h, this.w, this.h, this.x, this.y, this.w, this.h)

        }
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
        if(this.keys[65] && this.lastInput === "up"){
            this.dy = 1;
            this.attacking = true;
            this.hurtBox.x = this.x;
            this.hurtBox.y = this.y - 8;
            this.hurtBox.w = 16;
            this.hurtBox.h = 8;
            this.sounds.attackSound();
        }
        if(this.keys[65] && this.lastInput === "down"){
            this.dy = 0;
            this.attacking = true;
            this.hurtBox.x = this.x;
            this.hurtBox.y = this.y + this.h + 8;
            this.hurtBox.w = 16;
            this.hurtBox.h = 8;
            this.sounds.attackSound();
        }
        if(this.keys[65] && this.lastInput === "right"){
            this.dy = 0;
            this.attacking = true;
            this.hurtBox.x = this.x + this.w;
            this.hurtBox.y = this.y;
            this.hurtBox.w = 8;
            this.hurtBox.h = 16;
            this.sounds.attackSound();
        }
        if(this.keys[65] && this.lastInput === "left"){
            this.dy = 1;
            this.attacking = true;
            this.hurtBox.x = this.x - 8;
            this.hurtBox.y = this.y;
            this.hurtBox.w = 8;
            this.hurtBox.h = 16;
            this.sounds.attackSound();
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
        } else if (this.attacking && this.lastInput === "up"){
            this.dy = 1;
            if (this.animationCount < 1) {
                this.animationCount++;
            } else if (this.dx < 5) {
                this.dx++
                this.animationCount = 0;
            } else {
                this.dx = 0;
                this.animationCount = 0;
            } 
        } else if (this.attacking && this.lastInput === "down"){
            this.dy = 0;
            if (this.animationCount < 1) {
                this.animationCount++;
            } else if (this.dx < 5) {
                this.dx++
                this.animationCount = 0;
            } else {
                this.dx = 0;
                this.animationCount = 0;
            } 
        } else if (this.attacking && this.lastInput === "left"){
            this.dy = 1;
            if (this.animationCount < 1) {
                this.animationCount++;
            } else if (this.dx < 5) {
                this.dx++
                this.animationCount = 0;
            } else {
                this.dx = 0;
                this.animationCount = 0;
            } 
        } else if (this.attacking && this.lastInput === "right"){
            this.dy = 0;
            if (this.animationCount < 1) {
                this.animationCount++;
            } else if (this.dx < 5) {
                this.dx++
                this.animationCount = 0;
            } else {
                this.dx = 0;
                this.animationCount = 0;
            } 
        }else if (this.lastInput === "up") {
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


