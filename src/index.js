import Game from "./game"
// import Sound from "./sound"

addEventListener('DOMContentLoaded', function() { 
    const beforeGame = document.getElementById('game-canvas')
    const ctx = beforeGame.getContext('2d')
    beforeGame.classList.add("begin")
    const game = new Game(); 
    const tag = document.getElementById("description")
    addEventListener("keydown", function(e){
        if( e.code === "Enter" && game.start) {
            tag.classList.add("hidden")
            beforeGame.classList.remove("begin")
            game.draw()
            game.start = false
        } else if (e.code === "Enter" && !game.onGoingGame ) {
            location.reload()
        }
    })

    setInterval(function() {
        if (game.player.dead) {
            tag.innerText = "Press Enter to try again."
            tag.classList.remove("hidden")
            beforeGame.classList.add("end")
        }
    })
    // const tag = document.getElementById("description")
})