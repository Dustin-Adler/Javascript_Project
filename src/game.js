import Dragon from "./bosses/dragon_boss";
import MapLayouts from "./dungeonMaps";
import Player from "./player";
import Sound from "./sound"
import Items from "./items";
import Util from "./util";
import Ui from "./ui";

class Game {
    constructor() { 
        this.canvas = document.getElementById('game-canvas');
        this.width = this.canvas.width = 256;
        this.height = this.canvas.height = 240;
        this.ctx = this.canvas.getContext('2d');
        this.sounds = new Sound();
        this.fps = 60;
        this.roomTiles = new Image();
        this.roomTiles.src = "./Assets/tileset/roomTiles.png";
        this.maps = new MapLayouts();
        this.currentMap = this.maps.bossChamber
        this.draw = this.draw.bind(this)
        this.player = new Player(this.ctx, this.canvas)
        this.dragon = new Dragon(this.ctx, this.canvas)
        this.items = new Items(this.ctx, this.canvas)
        this.ui = new Ui(this.ctx, this.canvas)
        this.util = new Util
        this.enemies = [this.dragon]
        this.droppedHeart = false
        this.start = true
        this.onGoingGame = true
        this.win = false
    }

    dropHeartContainer(){
        if (!this.droppedHeart) {
            if (!this.enemies.length) {
                this.items.currentItems.push(this.items.drawHeartContainer(120, 112))
                this.sounds.revealItemSound();
                this.droppedHeart = true
            }
        }
    }

    listeners(){
        window.addEventListener("keydown", this.player.keyDown.bind(this));
        window.addEventListener("keyup", this.player.keyUp.bind(this));
    }

    handleEnemies(){
        if (this.enemies.length) {
            this.enemies.forEach((enemy, i) => {
                if (!enemy.alive) {
                    this.enemies.splice(i, 1)
                } else {
                    enemy.update(this.player, this.util);
                }
            })
        } else {
            this.dropHeartContainer()
        }
    }

    gameOver(frame, setFPS) {
        if (this.player.dead || this.win) {
            // window.clearTimeout(setFPS)
            this.ctx.clearRect(0,0,this.width,this.height);
            window.cancelAnimationFrame(frame)
            this.onGoingGame = false
            this.sounds.pauseAllSounds()
        }
    }

    currentWinCondition() {
        if (this.items.win) {
            this.win = true
        }
    }

    draw() {
        // this.sounds.startBattleSong();
        this.listeners();
        let setFPS = setTimeout(() => {
            this.ctx.clearRect(0,0,this.width,this.height);
            this.createMap();
            this.player.update();
            this.items.update(this.player, this.util, this.sounds);
            this.ui.update(this.player);
            this.handleEnemies();
            this.handleFireballs();
            this.currentWinCondition()
            // this.handlePlayerAttack()
            this.gameOver(frame, setFPS)
            let frame = window.requestAnimationFrame(this.draw);
        }, 1000 / this.fps );
    }

    handlePlayerAttack() {

    }

    handleFireballs(){
        this.dragon.fireballs.forEach((fireball, i) => {
            fireball.update();
            if (this.util.collision(fireball, this.player)) {
                if (this.player.health < 10) {
                    this.player.health++;
                    }
                this.sounds.playerTakeDmgSound();
                if (this.player.x + Math.floor(fireball.velocityX * 4) < (240 - this.player.w) &&
                    this.player.x + Math.floor(fireball.velocityX * 4) > 16 &&
                    this.player.y + Math.floor(fireball.velocityY * 4) < 208 - this.player.h &&
                    this.player.y + Math.floor(fireball.velocityY * 4) > 32) {
                            this.player.x += (Math.floor(fireball.velocityX * 4));
                            this.player.y += (Math.floor(fireball.velocityY * 4));}
                this.dragon.fireballs.splice(i, 1);
            }
            if (fireball.x > 232 || fireball.x < 16) this.dragon.fireballs.splice(i, 1);
            if (fireball.y > 198 || fireball.y < 32) this.dragon.fireballs.splice(i, 1);
        })
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