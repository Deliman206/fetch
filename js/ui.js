'use strict';
var userInterface=document.getElementById('ui');
var ctxui=userInterface.getContext('2d');
var rendering;
ctxui.font='10px Georgia';

function renderScore()
{
  ctxui.clearRect(0,0,100,100);
  ctxui.strokeText(gameState.score,0,20,100);
  console.log(gameState.score);}
function scoreUp(scoreIncrease)
{rendering=true;
  console.log('called');
  var displayValue=scoreIncrease;
  renderScore();
  var scoreGainRenderID=setInterval(function(){
    console.log('running');
    ctxui.clearRect(playerState.x-20,playerState.y-40,50,50);
    ctxui.strokeText(displayValue,playerState.x,playerState.y);
  },4);
  setTimeout(function(){
    clearInterval(scoreGainRenderID);
    ctxui.clearRect(playerState.x-20,playerState.y-40,50,50);
    console.log(rendering);
  },1000);
}