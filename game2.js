'use strict';
var game = document.getElementById('game');
var allscreen = document.getElementById('html');
var ctx0 = game.getContext('2d');
var playable=false;
var keyPressed;
// var obstacles = [fireH()];
//Game Character
var dogImages=new Array;
dogImages.push('assets/Running/run_0.png');
dogImages.push('assets/Running/run_1.png');
dogImages.push('assets/Running/run_2.png');
dogImages.push('assets/Running/run_3.png');
dogImages.push('assets/Running/run_4.png');
dogImages.push('assets/Running/run_5.png');
dogImages.push('assets/Running/run_6.png');
dogImages.push('assets/Running/run_7.png');
dogImages.push('assets/Running/run_8.png');
var player = new Image(90,70);
player.src = 'assets/KKona/dogBark0.png';
var fireH = new Image( 90, 70);
fireH.src = 'img/pond.png';
var gameState ={
  x:1000,
  y:350,
  score:0,
  timer:0,
  cycle:0
};
var playerState = {
  x:450,
  y:333,
  jumping:99,
  walkCycle:0,
  jumpDirection:0
};
function refreshPlayer(){
  player.onload = function() {
    ctx0.clearRect(0,0,game.width,game.height);
    console.log(playerState.walkCycle);
    console.log(gameState.timer-playerState.walkCycle*9);
    player.src=dogImages[gameState.timer-playerState.walkCycle*9];
    ctx0.drawImage(player, playerState.x, playerState.y);
  };
}
function play()
{
  playable=true;
}

setInterval(function(){
  gameState.timer+=1;
  if(gameState.timer%2){
    gameState.cycle+=1;
  }
  if(gameState.timer%9===0){
    playerState.walkCycle+=1;
  }
  refreshPlayer();
  inputCheck();
  gameState.score+=10;
  if(gameState.timer>10000){
    gameState.timer=0;
    gameState.cycle=0;}

},2);

function inputCheck(){
  if(playable===true){
    switch(playerState.jumping){
    case 99:
      if(keyPressed===39){ //Right arrow
        ctx0.clearRect(0,0,game.width,game.height);
        playerState.x+=1;
        ctx0.drawImage(player, playerState.x, playerState.y);
        playerState.jumpDirection=1;}
      //Left arrow
      if(keyPressed===37){
        ctx0.clearRect(0,0,game.width,game.height);
        playerState.x-=1;
        ctx0.drawImage(player, playerState.x, playerState.y);
        playerState.jumpDirection=2;}
      if(keyPressed===38){
        playerState.jumping=0;
        playerState.momentum='up';
        console.log(playerState.y);}
      break;
    case 49:
      playerState.momentum='down';
      playerState.jumping+=1;
      break;
    default:
      if(playerState.jumpDirection===1){
        playerState.x+=2;}
      if(playerState.jumpDirection===2){
        playerState.x-=2;}

      if(playerState.momentum==='down')
      {
        ctx0.clearRect(0,0,game.width,game.height);
        playerState.y+=2;
        playerState.jumping+=1;
        ctx0.drawImage(player, playerState.x, playerState.y);
        console.log(playerState.momentum);
      }
      else
      {
        ctx0.clearRect(0,0,game.width,game.height);
        playerState.y-=2;
        playerState.jumping+=1;
        ctx0.drawImage(player, playerState.x, playerState.y);
        console.log(playerState.momentum);
      }
      break;}
  }
}


function keyDown(event){
  keyPressed=event.keyCode;
  console.log(keyPressed);}
function keyUp(){
  keyPressed=83;}
window.addEventListener('keyup',keyUp);
window.addEventListener('keydown',keyDown);
//This should be adjusted for right/bottom side collisions
if (playerState.x === gameState.x || playerState.x === gameState.x){
  playable=false;
  playerState.y -=100;
}

//>>>>>>>>>>>>>>>>>>    //
//  Calls for operation //
//>>>>>>>>>>>>>>>>>>>>  //
refreshPlayer();
// drawObstacle(fireH);
// ctx.clearRect(0,0,game.x,game.y);
play();