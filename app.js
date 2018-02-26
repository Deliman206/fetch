'use strict';
var dog = [];
var globalTimer=0;
var timer=0;
var cycle=0;
var game=document.getElementById('game');
var demo=document.getElementById('dogbark')
var ctx=game.getContext('2d');
// setInterval(incrementTimer,50);

// var imageObj = new Image();
// imageObj.src = 'assests/KKona/dogBark0.png';
// imageObj.onload= function(){
//     ctx.drawImage();
// }
ctx.fillStyle='#3e94ff ';
ctx.fillRect(0,0,game.width, game.height);
ctx.fillStyle='#009e00 ';
ctx.fillRect(0,350,game.width, game.height/3);