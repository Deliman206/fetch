'use strict';
var globalTimer=0;
var timer=0;
var cycle=0;
var game=document.getElementById('game');
var demo=document.getElementById('dogbark')
var ctx=game.getContext('2d');
setInterval(incrementTimer,50);

function incrementTimer()
{
    Math.floor(timer+=1);
    if(timer%4===0)
    {
        cycle+=1;
    }
    globalTimer
    if(timer%3===0){
    dogIdle();};
//6 frame cycle of dog barking
function dogIdle(){
  if(timer%2===0)
    {
      var img=document.getElementById('bark0')
      ctx.drawImage(img,10,10)
      demo.src=('assets/KKona/dogBark0.png')
      console.log(demo.src);
  }
  if(timer%2===1)
    {
      var img=document.getElementById('bark0')
      ctx.drawImage(img,10,10)
      demo.src=('assets/KKona/dogBark2.png')
      console.log(demo.src);
    }
  }
}