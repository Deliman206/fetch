'use strict';
var carasel2=document.getElementById('background2');
var ctx2=carasel2.getContext('2d');
//State variable to control Relative Position
var startState2 ={
  x: 2600,
  y: 150
};

var tree1 = new Image(10,5);
tree1.src = 'img/sprites/tree.png';
var bush = new Image(10,5);
bush.src = 'img/sprites/shrub.png';
var lamp = new Image(10,5);
lamp.src = 'img/sprites/lamp.png';
var tulips = new Image(10,5);
tulips.src = 'img/sprites/tulips.png';
var cloud = new Image(10,5);
cloud.src = 'img/sprites/cloud.png';
var bench = new Image(10,5);
bench.src = 'img/sprites/bench.png';
var slide = new Image(10,5);
slide.src = 'img/sprites/slide.png';

function drawScene(){
  setInterval(function(){
    ctx2.clearRect(0,0,900,500);
    ctx2.drawImage(bench, startState2.x + 510, startState2.y + 120);
    ctx2.drawImage(cloud, startState2.x + 350, startState2.y - 150);
    ctx2.drawImage(lamp, startState2.x + 300, startState2.y + 20);
    ctx2.drawImage(tulips, startState2.x, startState2.y +170);
    ctx2.drawImage(tree1, startState2.x + 50, startState2.y - 70);
    startState2.x--;
    if(startState2.x< -1300){
      startState2.x = 950;
    }
  },2);
}
drawScene(startState2.x,startState2.y);