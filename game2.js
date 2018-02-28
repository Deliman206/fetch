'use strict';
var game = document.getElementById('game');
var ctx0 = game.getContext('2d');
var playable=false;
var keyPressed=83;
//This is so when you hold a direction it doesn't slow down.
var inputValidation=false;
var oldInputButton;
//This is so you keep running after a jump.
var keyHeldLeft;
var keyHeldRight;
var keyHeldUp;
// var obstacles = [fireH()];
//Game Character
var dogImages=new Array;
var dogJumpingImages=new Array;
dogImages.push('assets/Running/run_0.png');
dogImages.push('assets/Running/run_1.png');
dogImages.push('assets/Running/run_2.png');
dogImages.push('assets/Running/run_3.png');
dogImages.push('assets/Running/run_4.png');
dogImages.push('assets/Running/run_5.png');
dogImages.push('assets/Running/run_7.png');
dogImages.push('assets/Running/run_8.png');
dogJumpingImages.push('assets/Jumping/jump_0.png');
dogJumpingImages.push('assets/Jumping/jump_1.png');
var player = new Image(90,70);
player.src = 'assets/KKona/dogBark0.png';
var fireH = new Image( 90, 70);
fireH.src = 'img/pond.png';
var gameState ={
x:1000,
y:350,
score:0,
timer:0,
cycle:0,
incrementscore:function(scorevalue)
{this.score+=scorevalue;
renderScore(scorevalue);}
};
var playerState = {
x:450,
y:333,
jumping:99,
walkCycle:-1,
jumpDirection:0,
momentum:0,
walkCycleSpeed:30,
};
function refreshPlayer(){
player.onload = function() {
ctx0.clearRect(0,0,game.width,game.height);

switch(playerState.momentum)
{case 'up':
player.src=dogJumpingImages[0];
ctx0.drawImage(player, playerState.x, playerState.y);
break;
case 'down':
player.src=dogJumpingImages[1];
ctx0.drawImage(player, playerState.x, playerState.y);
break;
default:
ctx0.drawImage(player, playerState.x, playerState.y);
break;}
};
}
function play()
{
playable=true;
}
setInterval(function(){
gameState.timer=Math.floor(gameState.timer+1);
refreshPlayer();
inputCheck();
if(gameState.timer%2===0)
{
gameState.cycle=Math.floor(gameState.cycle+1);
}
renderScore(0);
if(gameState.timer%2000===0)
{gameState.incrementscore(10);}
if(gameState.timer%playerState.walkCycleSpeed===0)
{
playerState.walkCycle=Math.floor(playerState.walkCycle+1);
if(playerState.walkCycle===dogImages.length)
{
playerState.walkCycle=0;
}
player.src=dogImages[playerState.walkCycle];
}
if(gameState.timer>10000){
gameState.timer=0;
gameState.cycle=0;
playerState.walkCycle=0;}
},4);

function inputCheck(){
if(playable===true){
switch(playerState.jumping){
case 99:
playerState.momentum=0;
if(keyPressed===39){ //Right arrow
ctx0.clearRect(0,0,game.width,game.height);
playerState.x+=1;
ctx0.drawImage(player, playerState.x, playerState.y);
playerState.jumpDirection=1;
playerState.walkCycleSpeed=45;
keyHeldRight=39;}
//Left arrow
if(keyPressed===37){
ctx0.clearRect(0,0,game.width,game.height);
playerState.x-=1;
ctx0.drawImage(player, playerState.x, playerState.y);
playerState.jumpDirection=2;
playerState.walkCycleSpeed=20;
keyHeldLeft=37;}
if(keyPressed===38){
playerState.jumping=0;
playerState.momentum='up';
console.log(playerState.y);
keyHeldUp=38;}
break;
case 98:
playerState.y+=2;
playerState.jumping+=1;
ctx0.clearRect(0,0,game.width,game.height);
ctx0.drawImage(player, playerState.x, playerState.y);
console.log(keyPressed);
if(keyHeldLeft===37)
{keyPressed=keyHeldLeft;}else
if(keyHeldRight===39)
{keyPressed=keyHeldRight;}else
if(keyHeldUp===38)
{keyPressed=keyHeldUp;}
if(keyHeldLeft!==37&&keyHeldRight!==39&&keyHeldUp!==38)
{keyPressed=83;
console.log(keyPressed);
playerState.jumpDirection=0;}
break;
case 49:
playerState.momentum='down';
playerState.jumping+=1;
ctx0.clearRect(0,0,game.width,game.height);
ctx0.drawImage(player, playerState.x, playerState.y);
break;
default:
if(playerState.jumpDirection===1){
playerState.x+=2;}
if(playerState.jumpDirection===2){
playerState.x-=2;}

if(playerState.momentum==='down')
{
playerState.y+=2;
playerState.jumping+=1;
player.src=dogJumpingImages[1];
ctx0.clearRect(0,0,game.width,game.height);
ctx0.drawImage(player, playerState.x, playerState.y);
console.log(playerState.momentum);
}
else
{
playerState.y-=2;
playerState.jumping+=1;
player.src=dogJumpingImages[0];
ctx0.clearRect(0,0,game.width,game.height);
ctx0.drawImage(player, playerState.x, playerState.y);
console.log(playerState.momentum);
}
break;}
}
}

function keyDown(event){
if(inputValidation===false||oldInputButton===38||event.keyCode===38)
{ oldInputButton=keyPressed;
keyPressed=event.keyCode;
inputValidation=true;
}}
function keyUp(event){
keyPressed=83;
if(keyHeldLeft===event.keyCode)
{
keyHeldLeft=83;
}
if(keyHeldRight===event.keyCode)
{
keyHeldRight=83;
}
if(keyHeldUp===event.keyCode)
{
keyHeldUp=83;
}
inputValidation=false;
if(playerState.jumping===99){
playerState.jumpDirection=0;}
playerState.walkCycleSpeed=30;}
window.addEventListener('keyup',keyUp);
window.addEventListener('keydown',keyDown);
//This should be adjusted for right/bottom side collisions
if (playerState.x === gameState.x || playerState.x === gameState.x){
playable=false;
playerState.y -=100;
}
//>>>>>>>>>>>>>>>>>> //
// Calls for operation //
//>>>>>>>>>>>>>>>>>>>> //
refreshPlayer();
// drawObstacle(fireH);
// ctx.clearRect(0,0,game.x,game.y);
play();