'use strict';

var cannon = document.getElementById('cannon');
var ctxCannon = cannon.getContext('2d');

var cannonImages = new Array;
for (var i = 0; i < 11; i++) {
  cannonImages.push(new Image(20,15));
  cannonImages[i].src = 'img/cannon/launch' + i + '.png';
}
function cannonDie(){
  var x=0;
  var interval= setInterval(function(){
    ctxCannon.clearRect(0,0,900,500);
    ctxCannon.drawImage(cannonImages[10], 20-x, 40);
    x++
    if (x === 400){
      clearInterval(interval);
    }
  },10);
}
function cannonLaunch() {
  var i = 0;
  var cannonLaunch = setInterval(function() {
    ctxCannon.clearRect(0,0,900,500);
    ctxCannon.drawImage(cannonImages[i], 20, 40);
    i++;
    if (i=== 3){
      projectile.drawDisk();
    }
    if (i === cannonImages.length) {
      clearInterval(cannonLaunch);
      cannonDie();
    }
  }, 200);
}
