'use strict';
var startDiv = document.getElementById('start-container');
var startCanvas = document.getElementById('start-canvas');
var startCtx = startCanvas.getContext('2d');
var img = document.createElement('img');
img.setAttribute('src', 'img/start-button.png');
startDiv.appendChild(img);

startCtx.fillStyle = 'rgba(200, 200, 200, 0.75)';
startCtx.fillRect(0, 0, startCanvas.width, startCanvas.height);

startDiv.addEventListener('click', function(e){
  if(e.clientX > 296 && e.clientX < 642
  && e.clientY < 409 && e.clientY > 276) {
    console.log('div clicked');
    startDiv.style.visibility = 'hidden';
  }
  //Start up game
});
function printMousePos(e) {
  console.log('mouse click: X: ' + e.clientX + ', Y: ' + e.clientY);
}
document.addEventListener('click', printMousePos);