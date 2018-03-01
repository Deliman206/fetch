'use strict';
var carasel2=document.getElementById('background2');
var ctx2=carasel2.getContext('2d');
//State variable to control Relative Position
var backgroundState2 ={
    x: 1200,
    y: 150
}
ctx2.fillStyle='#3e94ff ';
ctx2.fillRect(0,0,carasel2.width, carasel2.height);
ctx2.fillStyle='#009e00 ';
ctx2.fillRect(0,350,carasel2.width, carasel2.height/3);
var tulips = new Image(10,5);
tulips.src = 'img/sprites/tulips.png';
var cloud = new Image(10,5);
cloud.src = 'img/sprites/cloud.png';
var bench = new Image(10,5);
bench.src = 'img/sprites/bench.png';

function drawTree(x,y){
    tulips.onload = function(){
        setInterval(function(){
            ctx2.clearRect(0,0,900,500);
            // ctx2.drawImage(pond, backgroundState2.x+600, backgroundState2.y-100);
            for( var i =0; i<2; i++){
                ctx2.drawImage(tulips, backgroundState2.x + 25, backgroundState2.y+180);
                ctx2.drawImage(cloud, backgroundState2.x + 500, backgroundState2.y-100);
                ctx2.drawImage(bench, backgroundState2.x + 250, backgroundState2.y+130);
                if(backgroundState2.x< -600){
                    backgroundState2.x = 1000;
                }
            }
            backgroundState2.x--;    
        },2)
    }
}

drawTree(backgroundState2.x,backgroundState2.y);