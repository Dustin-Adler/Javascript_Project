

const canvas = document.querySelector('canvas');
canvas.width = 256;
canvas.height = 240;
const ctx = canvas.getContext('2d');
let fps = 60;
let roomTiles = new Image();
roomTiles.src = "./Assets/tileset/roomTiles.png"

let dungeonMap = [ 
    [ 15, 13, 13, 13, 13, 13, 13, 36, 37, 13, 13, 13, 13, 13, 13, 15],
    [ 15, 19, 19, 19, 19, 19, 19, 42, 43, 19, 19, 19, 19, 19, 19, 15],
    [ 15,  0,  6,  0,  6,  0,  6,  0,  6,  0,  6,  0,  6,  0,  6, 15],
    [ 15,  6,  0,  6,  0,  6,  0,  6,  0,  6,  0,  6,  0,  6,  0, 15],
    [ 15,  0,  6,  0,  6,  0,  6,  0,  6,  0,  6,  0,  6,  0,  6, 15],
    [ 15,  6,  0,  6,  0,  6,  0,  6,  0,  6,  0,  6,  0,  6,  0, 15],
    [ 15,  0,  6,  0,  6,  0,  6,  0,  6,  0,  6,  0,  6,  0,  6, 15],
    [ 15,  8,  0,  6,  0,  6,  0,  6,  0,  6,  0,  6,  0,  6,  8, 15],
    [ 15,  8,  6,  0,  6,  0,  6,  0,  6,  0,  6,  0,  6,  0,  8, 15],
    [ 15,  6,  0,  6,  0,  6,  0,  6,  0,  6,  0,  6,  0,  6,  0, 15],
    [ 15,  0,  6,  0,  6,  0,  6,  0,  6,  0,  6,  0,  6,  0,  6, 15],
    [ 15,  6,  0,  6,  0,  6,  0,  6,  0,  6,  0,  6,  0,  6,  0, 15],
    [ 21,  0,  6,  0,  6,  0,  6,  0,  6,  0,  6,  0,  6,  0,  6, 21],
    [ 12, 13, 13, 13, 13, 13, 13, 36, 37, 13, 13, 13, 13, 13, 13, 14],
    [ 18, 19, 19, 19, 19, 19, 19, 42, 43, 19, 19, 19, 19, 19, 19, 20]];

function drawMap(currentMap) {
    for (let i = 0; i < currentMap.length; i++) {
        for ( let j = 0; j < currentMap[i].length; j++) {
            ctx.drawImage(roomTiles, ((currentMap[i][j] % 6) * 16), 
            (Math.floor(currentMap[i][j] / 6 ) * 16), 
            16, 16, j*16, i*16, 16, 16);
        }
    }
}
function draw() {
    setTimeout(function() {
        requestAnimationFrame(draw) ;
        drawMap(dungeonMap)
    }, 1000 / fps );
}

draw();

