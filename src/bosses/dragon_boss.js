// import Player from "../player";
import Fireball from "../fireball";

class Dragon {

    constructor(ctx, canvas ) {
        this.targetX = 121
        this.targetY = 80
        this.dragon = new Image();
        this.dragon.src = "./Assets/tileset/dragon.png";
        this.ctx = ctx;
        this.canvas = canvas;
        this.fireballs = []
        this.fireballInterval = 0
        this.body = {
            w: 24,  
            h: 32,  
            x: 116,  
            y: 32,
            dx: 0,
            dy: 0,
            bodyCount: 0,
            }
        this.head1 = {
            w: 10,  
            h: 16,  
            x: 103,  
            y: 60,
            dx: 83,
            dy: 0,
            radius: 14,
            radians: 0,
            velocity: 0.05,
            health: 3,
            }
            this.head2 = {
                w: 10,  
                h: 16,  
                x: 123,  
                y: 68,
                dx: 83,
                dy: 0,
                radius: 14,
                radians: 0,
                velocity: 0.05,
                health: 3,
                }
                this.head3 = {
                    w: 10,  
                    h: 16,  
                    x: 143,  
                    y: 60,
                    dx: 83,
                    dy: 0,
                    radius: 14,
                    radians: 0,
                    velocity: 0.05,
                    health: 3,
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
    }

    draw(img, sx, sy, sw, sh, dx, dy, dw, dh) {
        this.ctx.drawImage( img, sx, sy, sw, sh, dx, dy, dw, dh)
    }

    drawBody() {
        this.draw(this.dragon, this.body['dx'] * (this.body['w']+1),
        this.body['dy'], this.body['w'], this.body['h'], this.body['x'], 
        this.body['y'], this.body['w'], this.body['h'] )
    }

    bodyAnimation() {
        if (this.body['bodyCount'] < 10) { 
            this.body['bodyCount'] += 1;
        } else if (this.body['dx'] < 2) {
            this.body['dx']++;
            this.body['bodyCount'] = 0;
        } else {
            this.body['dx'] = 0;
            this.body['bodyCount'] = 0;
        }
    }

    drawHeads(head){
        this.draw(this.dragon, head['dx'], head['dy'],
        head['w'], head['h'], head['x'], 
        head['y'], head['w'], head['h'])
    }

    moveHead1(){
        this.head1['radians'] += this.head1['velocity'];
        this.head1['x'] = this.head1['x'] - Math.sin(this.head1['radians']);
        this.head1['y'] = this.head1['y'] + Math.cos(this.head1['radians']);
    }

    moveHead2(){
        this.head2['radians'] += this.head2['velocity'];
        this.head2['y'] = this.head2['y'] + Math.cos(this.head2['radians']);
    }

    moveHead3(){
        this.head3['radians'] += this.head3['velocity'];
        this.head3['x'] = this.head3['x'] + Math.sin(this.head3['radians']);
        this.head3['y'] = this.head3['y'] + Math.cos(this.head3['radians']);
    }

    drawDeadHeads(){
        this.draw(this.dragon, this.deadHeads['dx'], this.deadHeads['dy'],
        this.deadHeads['w'], this.deadHeads['h'], this.deadHeads['x'], 
        this.deadHeads['y'], this.deadHeads['w'], this.deadHeads['h'])
    }

    drawNeck() {
        this.draw(this.dragon, this.neck['dx'],
        this.neck['dy'], this.neck['w'], this.neck['h'], this.neck['x'], 
        this.neck['y'], this.neck['w'], this.neck['h'] )
    }

    shootFireballs(){ 
        const heads = [this.head1, this.head2, this.head3]
        let head = heads[Math.floor((Math.random() * 3)) ]
        const fireball = new Fireball(this.ctx, this.canvas, head.x + 3, head.y + 16, (this.targetX + 8), (this.targetY + 8) )
        fireball.getVelocity();
        this.fireballs.push(fireball)
    }

    moveDeadHeads() {

    }

    animationFrames(){
        this.bodyAnimation();
    }

    update() {
        const that = this
        this.drawBody();
        this.drawHeads(this.head1);
        this.drawHeads(this.head2);
        this.drawHeads(this.head3);
        this.moveHead1();
        this.moveHead2();
        this.moveHead3();
        if (this.fireballInterval < 30){
            this.fireballInterval++
        } else {
            this.shootFireballs();
            this.fireballInterval = 0;
        }
        // 
        this.fireballs.forEach((fireball, i) => {
            fireball.update();
            if (fireball.x > 232 || fireball.x < 16) this.fireballs.splice(i, 1);
            if (fireball.y > 198 || fireball.y < 32) this.fireballs.splice(i, 1);
        })
        this.animationFrames();
    }
}

export default Dragon;