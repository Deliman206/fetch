'use strict';

var cannon = document.getElementById('cannon');
var ctx = cannon.getContext('2d');

var cannonImages = new Array;

cannonImages.push('img/cannon/launch0.png');
cannonImages.push('img/cannon/launch1.png');
cannonImages.push('img/cannon/launch2.png');
cannonImages.push('img/cannon/launch3.png');
cannonImages.push('img/cannon/launch4.png');
cannonImages.push('img/cannon/launch5.png');
cannonImages.push('img/cannon/launch6.png');
cannonImages.push('img/cannon/launch7.png');
cannonImages.push('img/cannon/launch8.png');
cannonImages.push('img/cannon/launch9.png');

function cannonLaunch() {
  for (var i = 0; i < cannonImages.length; i++) {
    ctx.drawImage(cannonImages[i]);
  }
}

cannonLaunch();