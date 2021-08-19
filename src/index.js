import Game from "./game"
// import Sound from "./sound"

addEventListener('DOMContentLoaded', function() { 
    // const sound = new Sound();
    const game = new Game(); 
    // if (game) sound.battleSong.play();
    game.draw()
})