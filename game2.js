'use strict';
var game = document.getElementById('game');
var allscreen = document.getElementById('html');
var ctx0 = game.getContext('2d');
var timer=0;
var playable=false;
var jumping=false;
var keyPressed;
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
};
var playerState = {
  x:450,
  y:400
};
function refreshPlayer(){
  player.onload = function() { 
    ctx0.drawImage(player, playerState.x, playerState.y);
  };
}
function play()
{
  playable=true;
}

setInterval(function(){
  timer+=1;
  refreshPlayer();
  inputCheck();
},2);

function inputCheck(){
  if(playable===true){
    if(jumping===false){
      if(keyPressed===39){ //Right arrow
        console.log('pressed');
        ctx0.clearRect(0,0,game.width,game.height);
        playerState.x+=2;
        ctx0.drawImage(player, playerState.x, playerState.y);}
      //Left arrow
      if(keyPressed===37){
        console.log('pressed');
        ctx0.clearRect(0,0,game.width,game.height);
        playerState.x-=2;
        ctx0.drawImage(player, playerState.x, playerState.y);}
      if(keyPressed===38){
        console.log('jumping');
        jumping=true;}
    }
  }
}

function keyDown(event){
  keyPressed=event.keyCode;}
function keyUp(){
  keyPressed=6969696969696969;}
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