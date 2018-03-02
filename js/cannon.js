'use strict';

var cannon = document.getElementById('cannon');
var ctxCannon = cannon.getContext('2d');

var cannonImages = new Array;
for (var i = 0; i < 11; i++) {
  cannonImages.push(new Image(20,15));
  cannonImages[i].src = 'img/cannon/launch' + i + '.png';
}
function cannonDie(){
  for(var x = 0; x<400; x+=2){
    ctxCannon.clearRect(0,0,900,500);
    ctxCannon.drawImage(cannonImages[10], 20-x, 40);
    if (gameState.timer===400){
      document.removeChild(cannon);
    }
  }
}
function cannonLaunch() {
  var i = 0;
  var cannonLaunch = setInterval(function() {
    ctxCannon.clearRect(0,0,900,500);
    ctxCannon.drawImage(cannonImages[i], 20, 40);
    i++;
    if (i === cannonImages.length) {
      clearInterval(cannonLaunch);
      cannonDie();
    }
  }, 200);
}
