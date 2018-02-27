'use strict';
var carasel=document.getElementById('background');
var ctx1=carasel.getContext('2d');
//State variable to control Relative Position
var backgroundState ={
  x: 800,
  y: 150
};
ctx1.fillStyle='#3e94ff ';
ctx1.fillRect(0,0,carasel.width, carasel.height);
ctx1.fillStyle='#009e00 ';
ctx1.fillRect(0,350,carasel.width, carasel.height/3);
var tree1 = new Image(10,5);
tree1.src = 'img/tree.png';
var bush = new Image(10,5);
bush.src = 'img/bush.png';
var lamp = new Image(10,5);
lamp.src = 'img/streetlamp.png';

function drawTree(x,y){
  tree1.onload = function(){
    setInterval(function(){
      //Every 2 milliseconds...
      //Clear everything and redraw background.
      ctx1.clearRect(0,0,900,500);
      ctx1.fillStyle='#3e94ff ';
      ctx1.fillRect(0,0,carasel.width, carasel.height);
      ctx1.fillStyle='#009e00 ';
      ctx1.fillRect(0,350,carasel.width, carasel.height/3);
      //Draw these iimages at these points.
      ctx1.drawImage(tree1, backgroundState.x, backgroundState.y);
      ctx1.drawImage(bush, backgroundState.x -350, backgroundState.y +150);
      ctx1.drawImage(lamp, backgroundState.x +300, backgroundState.y);
      // ctx1.drawImage(pond, backgroundState.x +250, backgroundState.y);
      for( var i =0; i<1; i++){
        ctx1.drawImage(tree1, backgroundState.x +400*i, backgroundState.y);
        //If the first tree is far back, loop the whole canvas.
        if(backgroundState.x< -600){
          backgroundState.x = 1000;
        }
      }
      backgroundState.x--;
    },2);
  };
}

drawTree(backgroundState.x,backgroundState.y);