

class Player {

    constructor(ctx, canvas) {
        this.mcSprite = new Image();
        this.sourceSprite = this.mcSprite.src = "./Assets/tileset/mcMasterSheet.png";
        this.ctx = ctx;
        this.w = 16; 
        this.h = 17; 
        this.x = 120;  
        this.y = 48; 
        this.speed = 5;  
        this.dx =  0; 
        this.dy = 0; 
        this.canvas = canvas;
        // this.keyDown = this.keyDown.bind(this);
        // this.keyUP = this.keyUp.bind(this);
        this.keys = [];
    }

    // listeners(){
    //     document.addEventListener('keydown', this.keyDown);
    //     document.addEventListener('keyup', this.keyUp);
    // }

    // let lastButtonPressed = "up";
    // let animationCounter = 0;
    // let currentAnimation = 0;
    // let animationSpeed = 10;

    draw(img, sx, sy, sw, sh, dx, dy, dw, dh) {
        this.ctx.drawImage( img, sx, sy, sw, sh, dx, dy, dw, dh)
    }

    update() {
        this.draw(this.mcSprite, this.dx * this.w, this.dy * this.h, this.w, this.h, this.x, this.y, this.w, this.h);
    }

    keyDown(e) {
        this.keys[e.keyCode] = true;
    }

    keyUp(e){
        if (this.keys[e.keyCode]){
            delete this.keys[e.keyCode];
        }
    }

    move(){
        if (key[38] && this.y > 32) {
            this.y -= this.speed;
            this.dy = 0
        }
         if(key[40] && this.y < (240 - 32)) {
            this.y += this.speed;
            this.dy = 3
        }
        if(key[39] && this.x < (256 - 16)) {
            this.x += this.speed;
            this.dy = 1
        }
        if(key[37] && this.x > 16) {
            this.x -= this.speed;
            this.dy = 2
        }
    } 

} 

export default Player;


