
    const mcSprite = new Image();
    mcSprite.src = "./Assets/mc/Idle/Char2_idle_down.png"

class Player {

    constructor() {
        this.w = 16, 
        this.h = 16, 
        this.x = 120, 
        this.y = 48, 
        this.speed = 5, 
        this.dx =  0, 
        this.dy = 0, 
        this.document.addEventListener('keydown', keyDown);
        this.document.addEventListener('keyup', keyUp);
    }

    // let lastButtonPressed = "up";
    // let animationCounter = 0;
    // let currentAnimation = 0;
    // let animationSpeed = 10;

    drawMC() {
        ctx.drawImage(mcSprite, 0, 0, player.w, player.h, player.x, player.y, player.w, player.h)
    }

    clear() {
        clearRect(0, 0, canvas.width, canvas.height)
    }

    newPos() {
        player.x += player.dx;
        player.y += player.dy;
        detectWalls();
    }

    detectWalls() {
        if (player.x < 16) {
            player.x = 16
        }

        if (player.x + player.w > canvas.width +16) {
            player.x = canvas.width - player.w - 16;
        }

        if (player.y < 32) {
            player.y = 32;
        }

        if (player.y + player.h > canvas.height - 32) {
            player.y = canvas.height - player.h -32;
        }
    }

    update() {
        clear();
        drawPlayer();
        newPos();
        requestAnimationFrame(update);
    }

    moveUp() {
        player.y -= player.speed;
    }
    moveDown() {
        player.y += player.speed;
    }
    moveRight() {
        player.x += player.speed;
    }
    moveLeft() {
        player.x -= player.speed;
    }

    keyDown(e){
        if (e.key === 'ArrowRight' || e.key === 'Right'){
            moveRight();
        } else if (e.key === 'ArrowLeft' || e.key === 'Left'){
            moveLeft();
        } else if (e.key === 'ArrowUp' || e.key === 'Up'){
            moveUp();
        } else if (e.key === 'ArrowDown' || e.key === 'Down'){
            moveDown();
        }
    }

    keyUp(e){
        if (
            e.key == 'Right' ||
            e.key == 'ArrowRight' ||
            e.key == 'Left' ||
            e.key == 'ArrowLeft' ||
            e.key == 'Down' ||
            e.key == 'ArrowDown' ||
            e.key == 'Up' ||
            e.key == 'ArrowUp'
        ) {
            player.dx = 0;
            player.dy = 0;
        }
    }

    update();

} 

module.exports = Player;


