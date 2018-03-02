'use strict';

var cannon = document.getElementById('cannon');
var ctxCannon = cannon.getContext('2d');

var cannonImages = new Array;
for (var i = 0; i < 11; i++) {
  cannonImages.push(new Image(20,15));
  cannonImages[i].src = 'img/cannon/launch' + i + '.png';
}

function cannonLaunch() {
  var i = 0;
  var cannonLaunch = setInterval(function() {
    ctxCannon.clearRect(0,0,900,500);
    ctxCannon.drawImage(cannonImages[i], 200, 200);
    i++;
    if (i === cannonImages.length) {
      clearInterval(cannonLaunch);
    }
  }, 200);
}

cannonLaunch();