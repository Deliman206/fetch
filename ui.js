'use strict';
var userInterface=document.getElementById('ui');
var ctx1=userInterface.getContext('2d');
ctx1.font='40pt';
function renderScore(scoreIncrease)
{
  ctx1.clearRect(0,0,userInterface.width,userInterface.height);
  ctx1.strokeText(gameState.score,0,10,100);
  if(scoreIncrease!==0)
  {
    ctx1.strokeText(scoreIncrease,playerState.x+70,playerState.y);
    console.log(scoreIncrease);}
  console.log(gameState.score);
}