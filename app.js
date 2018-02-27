'use strict';

var game=document.getElementById('game');

var ctx=game.getContext('2d');
// ctx.globalCompositeOperation='destination-over';
var state ={
    x: 0,
    y: 150
}
var bark0 = new Image(90,70);
bark0.src = 'assets/KKona/dogBark0.png';

function drawDog(){
    console.log('proof of life');
    bark0.onload = function() { 
        ctx.drawImage(bark0, state.x+400, state.y) };  
    }
drawDog();