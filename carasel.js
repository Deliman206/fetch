'use strict';
var carasel=document.getElementById('background');
var ctx1=carasel.getContext('2d');
//State variable to control Relative Position
var state ={
    x: 0,
    y: 150
}
ctx1.fillStyle='#3e94ff ';
ctx1.fillRect(0,0,carasel.width, carasel.height);
ctx1.fillStyle='#009e00 ';
ctx1.fillRect(0,350,carasel.width, carasel.height/3);
var tree1 = new Image(10,5);
tree1.src = 'img/tree.png';
function drawTree(x,y){
    tree1.onload = function(){
        setInterval(function(){
            ctx1.clearRect(0,0,900,500);
            ctx1.fillStyle='#3e94ff ';
            ctx1.fillRect(0,0,carasel.width, carasel.height);
            ctx1.fillStyle='#009e00 ';
            ctx1.fillRect(0,350,carasel.width, carasel.height/3);
            ctx1.drawImage(tree1, state.x+50, state.y);
            state.x++;
        },50)
    }
}

drawTree(state.x,state.y);