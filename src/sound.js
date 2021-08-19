class Sound {
    constructor(){
        this.attack = new Audio();
        this.attack.src = "./Assets/sound/attack.wav"
        this.battleSong = new Audio();
        this.battleSong.src = "./Assets/sound/battle-song.wav"
        this.death = new Audio();
        this.death.src = "./Assets/sound/death.wav"
        this.enemy_hit = new Audio();
        this.enemy_hit.src = "./Assets/sound/enemy_hit.wav"
        this.fanfare = new Audio();
        this.fanfare.src = "./Assets/sound/fanfare.wav"
        this.reveal_item = new Audio();
        this.reveal_item.src = "./Assets/sound/reveal_item.wav"
        this.take_dmg = new Audio();
        this.take_dmg.src = "./Assets/sound/take_dmg.wav"
    }

    pauseAllSounds() {
        this.attack.pause();
        this.battleSong.pause();
        this.death.pause();
        this.enemy_hit.pause();
        this.fanfare.pause();
        this.reveal_item.pause();
        this.take_dmg.pause();
    }

    attackSound() {
        this.attack.play();
        this.attack.volume = 0.7
    }

    startBattleSong() {
        this.battleSong.play();
        this.battleSong.volume = 0.1 
    } 

    deathSound() {
        this.death.play();
        this.death.volume = 0.7
    }

    enemyHitSound() {
        this.enemy_hit.play();
    }

    fanfareSound() {
        this.fanfare.play();
    }

    revealItemSound() {
        this.reveal_item.play();
        this.reveal_item.volume = 0.8
    }

    playerTakeDmgSound() {
        this.take_dmg.play();
    }
}

export default Sound;