'use strict';
var carasel=document.getElementById('background');
var ctx1=carasel.getContext('2d');
//State variable to control Relative Position
var backgroundState ={
  x: 1100,
  y: 150
}
ctx1.fillStyle='#3e94ff ';
ctx1.fillRect(0,0,carasel.width, carasel.height);
ctx1.fillStyle='#009e00 ';
ctx1.fillRect(0,350,carasel.width, carasel.height/3);
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

function drawTree(x,y){
  tree1.onload = function(){
    setInterval(function(){
      ctx1.clearRect(0,0,900,500);
      ctx1.fillStyle='#3e94ff ';
      ctx1.fillRect(0,0,carasel.width, carasel.height);
      ctx1.fillStyle='#009e00 ';
      ctx1.fillRect(0,350,carasel.width, carasel.height/3);
      ctx1.drawImage(slide, backgroundState.x + 900, backgroundState.y +80);
      ctx1.drawImage(tulips, backgroundState.x + 850, backgroundState.y +170);
      ctx1.drawImage(bench, backgroundState.x + 710, backgroundState.y + 130);
      ctx1.drawImage(cloud, backgroundState.x + 800, backgroundState.y - 150);
      ctx1.drawImage(tulips, backgroundState.x + 650, backgroundState.y +170);
      ctx1.drawImage(bush, backgroundState.x + 250, backgroundState.y +150);
      ctx1.drawImage(lamp, backgroundState.x + 400, backgroundState.y + 30);
      for( var i =0; i<1; i++){
        ctx1.drawImage(tree1, backgroundState.x + 1000*i, backgroundState.y - 70);
        if(backgroundState.x< -1100){
          backgroundState.x = 900;
        }
      }
      backgroundState.x--;    
    },2)
  }
}

drawTree(backgroundState.x,backgroundState.y);