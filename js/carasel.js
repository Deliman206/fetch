'use strict';
var carasel=document.getElementById('background');
var ctx1=carasel.getContext('2d');
//State variable to control Relative Position
var startState = {
  x: 1100,
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
    ctx1.clearRect(0,0,900,500);
    ctx1.fillStyle='#00ccff';
    ctx1.fillRect(0,0,carasel.width, carasel.height);
    ctx1.fillStyle='#009e00';
    ctx1.fillRect(0,350,carasel.width, carasel.height/3);
    ctx1.drawImage(tulips, startState.x + 850, startState.y +170);
    ctx1.drawImage(bench, startState.x + 710, startState.y + 120);
    ctx1.drawImage(cloud, startState.x + 900, startState.y - 150);
    ctx1.drawImage(tulips, startState.x + 650, startState.y +170);
    ctx1.drawImage(bush, startState.x + 950, startState.y +150);
    ctx1.drawImage(bush, startState.x + 250, startState.y +150);
    ctx1.drawImage(lamp, startState.x + 400, startState.y + 20);
    ctx1.drawImage(slide, startState.x + 1100, startState.y + 60);
    startState.x--;
    ctx1.drawImage(tulips, startState.x + -100, startState.y +170);
    ctx1.drawImage(tree1, startState.x -80, startState.y - 70);
    if(startState.x< -1300){
      startState.x = 950;
    }
  },2);
}
drawScene(startState.x,startState.y);