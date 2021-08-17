import MapLayouts from "./dungeonMaps";
import Player from "./player";
import Dragon from "./bosses/dragon_boss"

class Game {
    constructor() {
        this.canvas = document.getElementById('game-canvas');
        this.width = this.canvas.width = 256;
        this.height = this.canvas.height = 240;
        this.ctx = this.canvas.getContext('2d');
        this.fps = 60;
        this.roomTiles = new Image();
        this.roomTiles.src = "./Assets/tileset/roomTiles.png";
        this.maps = new MapLayouts();
        this.currentMap = this.maps.bossChamber
        this.draw = this.draw.bind(this)
        this.player = new Player(this.ctx, this.canvas)
        this.dragon = new Dragon(this.ctx, this.canvas, this.player)
    }

    listeners(){
        window.addEventListener("keydown", this.player.keyDown.bind(this));
        window.addEventListener("keyup", this.player.keyUp.bind(this));
    }

    draw() {
        this.listeners();
        setTimeout(() => {
            this.ctx.clearRect(0,0,this.width,this.height);
            this.createMap();
            this.player.update();
            this.dragon.update();
            requestAnimationFrame(this.draw);
        }, 1000 / this.fps );
    }

    createMap() {
        for (let i = 0; i < this.currentMap.length; i++) {
            for ( let j = 0; j < this.currentMap[i].length; j++) {
                this.ctx.drawImage(this.roomTiles, ((this.currentMap[i][j] % 6) * 16), 
                (Math.floor(this.currentMap[i][j] / 6 ) * 16), 
                16, 16, j*16, i*16, 16, 16);
            }
        }
    }
}

export default Game;