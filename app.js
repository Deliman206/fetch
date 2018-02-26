'use strict';
var dog = [];

var game=document.getElementById('game');
var ctx=game.getContext('2d');


ctx.fillStyle='#3e94ff ';
ctx.fillRect(0,0,game.width, game.height);
ctx.fillStyle='#009e00 ';
ctx.fillRect(0,350,game.width, game.height/3);


var bark0 = new Image(90,70);
bark0.src = 'assets/KKona/dogBark0.png';
dog.push(bark0);
var bark1 = new Image(90,70);
bark1.src = 'assets/KKona/dogBark1.png';
dog.push(bark1);

function draw(x,y){
    console.log('proof of life');
    dog[0].onload = function() { 
        ctx.drawImage(dog[0], x, y) };
}
draw(10,10);