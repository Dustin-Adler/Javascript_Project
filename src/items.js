import Sound from "./sound";

class Items {

    constructor(ctx, canvas){
        this.ctx = ctx;
        this.canvas = canvas;
        this.sounds = new Sound();
        this.heartContainer = new Image();
        this.heartContainer.src = "Assets/tileset/heart-containers.png";
        this.currentItems = [];
        this.win = false
    }

    draw(img, sx, sy, sw, sh, dx, dy, dw, dh) {
        this.ctx.drawImage( img, sx, sy, sw, sh, dx, dy, dw, dh)
    }

    drawHeartContainer(x, y) {
        let heartContainerItem;
        return heartContainerItem = {
            img: this.heartContainer,
            sx: 0,
            sy: 0, 
            sw: 16, 
            sh: 16, 
            x: x, 
            y: y, 
            w: 16, 
            h: 16
        }
    }

    drawCurrentItems(){
        this.currentItems.forEach((item =>{
            this.draw(item.img, item.sx, item.sy, item.sw, item.sh, item.x, item.y, item.w, item.h);
        }))
    }

    pickUpItem(player, util) {
        this.currentItems.forEach((item, i) => {
            if (util.collision(item, player)) {
                this.currentItems.splice(i, 1)
                this.sounds.fanfareSound()
                this.win = true
            }
        })
    }

    update(player, util, sound) {
        this.drawCurrentItems()
        this.pickUpItem(player, util)
    }

}

export default Items