var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var drills, drill1, drill2, drill3, drill4;

var soil, drill1_img, drill2_img, drill3_img;


function preload() {
    soil = loadImage("/images/soil.png");
    drill1_img = loadImage("/images/drill1.png");
    drill2_img = loadImage("/images/drill2.png");
    drill3_img = loadImage("/images/drill3.png");
}


function setup() {
    canvas = createCanvas(displayWidth - 20, displayHeight - 30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
    
}



function draw() {
    if (playerCount === 3) {
        game.update(1);
    }
    if (gameState === 1) {
        clear();
        game.play();
    }
    if (gameState === 2) {
        game.end();
    }


}
