
class Dragon {

    constructor(ctx, canvas) {
        this.dragon = new Image();
        this.dragon.src = "./Assets/tileset/dragon.png";
        this.ctx = ctx;
        this.canvas = canvas;
        this.body = {
            w: 24,  
            h: 32,  
            x: 120,  
            y: 48,
            dx: 0,
            dy: 0
            }
        this.heads = {
            w: 10,  
            h: 16,  
            x: 120,  
            y: 48,
            dx: 83,
            dy: 0,
            speed: 3,
            health = 3
            }
        this.deadHeads = {
            w: 16,  
            h: 16,  
            x: 120,  
            y: 48,
            dx: 93,
            dy: 0,
            speed: 4,
            }
        this.neck = {
            w: 10,  
            h: 16,  
            x: 120,  
            y: 48, 
            dx: 74,
            dy: 0,
            }
        this.fireball = {
            w: 8,  
            h: 10,  
            x: 0,  
            y: 0, 
            dx: 75,
            dy: 20,
        }

    }

    draw(img, sx, sy, sw, sh, dx, dy, dw, dh) {
        this.ctx.drawImage( img, sx, sy, sw, sh, dx, dy, dw, dh)
    }

    drawBody() {
        this.draw(this.dragon, this.body[dx] * (this.body[w]+1),
        this.body[dy], this.body[w], this.body[h], this.body[x], 
        this.body[y], this.body[w], this.body[h] )
    }

    drawHeads(){
        this.draw(this.dragon, this.heads[dx], this.heads[dy],
        this.heads[w], this.heads[h], this.heads[x], 
        this.heads[y], this.heads[w], this.heads[h])
    }

    drawDeadHeads(){
        this.draw(this.dragon, this.deadHeads[dx], this.deadHeads[dy],
        this.deadHeads[w], this.deadHeads[h], this.deadHeads[x], 
        this.deadHeads[y], this.deadHeads[w], this.deadHeads[h])
    }

    drawNeck() {

    }

    move(){

    }

    animationFrames(){
        if (this.body[dx] < 2) this.body[dx]++;
        else this.body[dx] = 0;
        if (this.fireball[dx] < 3) this.fireball[dx]++;
        else this.fireball[dx] = 0;
        if (this.deadHead[dx] < 1 ) this.fireball[dx]++;
        else this.deadHead[dx] = 0;
    }

    update() {
        this.drawBody();
        this.move();
        this.animationFrames();
    }
}

export default Dragon;