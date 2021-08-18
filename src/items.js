class Items {

    constructor(ctx, canvas){
        this.ctx = ctx;
        this.canvas = canvas;
        this.heartContainer = new Image();
        this.heartContainer.src = "Assets/tileset/heart-containers.png"
    }

    draw(img, sx, sy, sw, sh, dx, dy, dw, dh) {
        this.ctx.drawImage( img, sx, sy, sw, sh, dx, dy, dw, dh)
    }

    dropHeartContainer(x, y) {
        this.draw(this.heartContainer, 0, 0, 16, 16, x, y, 16, 16 )
    }

    update() {
        this.dropHeartContainer();
    }

}

export default Items