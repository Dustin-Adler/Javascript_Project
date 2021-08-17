import Game from "./game"
import Fireball from "./fireball"

addEventListener('DOMContentLoaded', function() {
    const game = new Game();
    game.dragon.targetX = game.player.x
    game.dragon.targety = game.player.y
    game.draw()
})