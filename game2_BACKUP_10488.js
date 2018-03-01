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
  walkCycle:-1,
  jumpDirection:0,
  momentum:0,
  walkCycleSpeed:30,
  collided:false,
  jumpheight:149,
  jumping:0
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
 if (playerState.collided===false){
  checkCollisionWithObstacle(0);
  checkCollisionWithObstacle(1);
  checkCollisionWithObstacle(2);
  checkCollisionWithObstacle(3);
  checkCollisionWithObstacle(4);
};
  
  //Animation timer
  if(gameState.timer%2===0)
  {
  gameState.cycle=Math.floor(gameState.cycle+1);
  }
  if(gameState.timer%playerState.walkCycleSpeed===0)
  {
  playerState.walkCycle=Math.floor(playerState.walkCycle+1);
  if(playerState.walkCycle===dogImages.length)
  {
  playerState.walkCycle=0;
  }
  gameState.score+=.1;
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
    case playerState.jumpheight: //On the ground
      playerState.momentum=0;
      if(keyPressed===39){ //Right arrow
        ctx0.clearRect(0,0,game.width,game.height);
        playerState.x+=2;
        ctx0.drawImage(player, playerState.x, playerState.y);
        playerState.jumpDirection=1; //aspect to determine super jump
        playerState.walkCycleSpeed=45; //controls how often we transform player to show walking
        // keyHeldRight=39; // Allows user to move after superjump in flow
      }
  //Left arrow
      if(keyPressed===37){
        ctx0.clearRect(0,0,game.width,game.height);
        playerState.x-=3;
        ctx0.drawImage(player, playerState.x, playerState.y);
        playerState.jumpDirection=2;
        playerState.walkCycleSpeed=20;
        // keyHeldLeft=37; // Allows user to move after superjump in flow
      }
      if(keyPressed===38){
        playerState.jumping=0;
        playerState.momentum='up';
        keyHeldUp=38;
      }
    break;
  
    case playerState.jumpheight-1: // Frame before landing
      playerState.y+=2;
      playerState.jumping+=1;
      ctx0.clearRect(0,0,game.width,game.height);
      ctx0.drawImage(player, playerState.x, playerState.y);
      //Allows User to hold direction after jump

      // if(keyHeldLeft===37){
      //   keyPressed=keyHeldLeft;
      // }
      // if(keyHeldRight===39){
      //   keyPressed=keyHeldRight;
      // }
      // if(keyHeldUp===38){
      //   keyPressed=keyHeldUp;
      // }
      // if(keyHeldLeft!==37&&keyHeldRight!==39&&keyHeldUp!==38){
      //   keyPressed=83;
      // playerState.jumpDirection=0;
      // }
    break;
  
    case Math.floor(playerState.jumpheight/2): //Maximum Jump Height
      playerState.momentum='down'; // Trigger to cause fall
      playerState.jumping+=1; //Moves player through jump cycle
      player.src=dogJumpingImages[1];
      ctx0.clearRect(0,0,game.width,game.height);
      ctx0.drawImage(player, playerState.x, playerState.y);
    break;
  
    default:
      if(playerState.jumpDirection===1){ //Determines Long Jump Right
        playerState.x+=2;
      }
      if(playerState.jumpDirection===2){ //Determines Long Jump Left
        playerState.x-=2;
      }
      if(playerState.momentum==='down'){
        playerState.y+=2;
        playerState.jumping+=1;
        ctx0.clearRect(0,0,game.width,game.height);
        ctx0.drawImage(player, playerState.x, playerState.y);
      }else{
        playerState.y-=2;
        playerState.jumping+=1;
        player.src=dogJumpingImages[0];
        ctx0.clearRect(0,0,game.width,game.height);
        ctx0.drawImage(player, playerState.x, playerState.y);
        }
    break;
    }
  }
}

function keyDown(event){
  //input validation reduces lag
  if(inputValidation===false||oldInputButton===38||event.keyCode===38){
    oldInputButton=keyPressed;
    keyPressed=event.keyCode;
    inputValidation=true;
  }
}
function keyUp(event){
  keyPressed=83;
  if(keyHeldLeft===event.keyCode){
    keyHeldLeft=83;
  }
  if(keyHeldRight===event.keyCode){
    keyHeldRight=83;
  }
  if(keyHeldUp===event.keyCode){
    keyHeldUp=83;
  }
  inputValidation=false;
  if(playerState.jumping===playerState.jumpheight){
    playerState.jumpDirection=0;
  }
  playerState.walkCycleSpeed=30;
}

//Operations

window.addEventListener('keyup',keyUp);
window.addEventListener('keydown',keyDown);
playerState.jumping=playerState.jumpheight
refreshPlayer();
play();