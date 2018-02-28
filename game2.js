'use strict';
var game = document.getElementById('game');
var allscreen = document.getElementById('html');
var ctx0 = game.getContext('2d');
// var obstacles = [fireH()];
//Game Character
var player = new Image(90,70);
player.src = 'assets/KKona/dogBark0.png';
var fireH = new Image( 90, 70);
fireH.src = 'img/pond.png';
var gameState ={
    x:1000,
    y:350,
    score:0
}
var playerState = {
    x:450,
    y:400
}

function drawPlayer(){
    player.onload = function() { 
        ctx0.drawImage(player, playerState.x, playerState.y) 
    } 
}

function keyDown(event){
    var keyPressed=event.keyCode;
    switch(keyPressed){
        case 39: //Right arrow
        // console.log('pressed');
            ctx0.clearRect(0,0,game.width,game.height);
            playerState.x+=10;
            ctx0.drawImage(player, playerState.x, playerState.y);
        break;
      //Left arrow
        case 37:
        // console.log('pressed');
            ctx0.clearRect(0,0,game.width,game.height);
            playerState.x-=10;
            ctx0.drawImage(player, playerState.x, playerState.y);
        break;
        default:
        break;
    }
}
//This should be adjusted for right/bottom side collisions
if (playerState.x === gameState.x || playerState.x === gameState.x){
    window.removeEventListener('keydown', keyDown);
    playerState.y -=100;
}


//>>>>>>>>>>>>>>>>>>//
//  Calls for operation //
//>>>>>>>>>>>>>>>>>>>>//    
drawPlayer();
// drawObstacle(fireH);
// drawfireH();
// ctx.clearRect(0,0,game.x,game.y);
window.addEventListener('keydown', keyDown);