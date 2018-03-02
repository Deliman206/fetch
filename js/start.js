'use strict';
var startDiv = document.getElementById('start-container');
var startCanvas = document.getElementById('start-canvas');
var startCtx = startCanvas.getContext('2d');

//Creating start button image element
var img = document.createElement('img');
img.setAttribute('src', 'img/start-button.png');
startDiv.appendChild(img);

startCtx.fillStyle = 'rgba(200, 200, 200, 0.6)';
startCtx.fillRect(0, 0, startCanvas.width, startCanvas.height);

//Start button press handler
startDiv.addEventListener('click', function(e){
  //Checks if user clicked on start button
  //bind enter key
  //Reposition at later point
  if(e.clientX > 296 && e.clientX < 642 && e.clientY < 409 && e.clientY > 276) {
    startDiv.style.visibility = 'hidden'; 
    loadGame();
  }
});
window.addEventListener('keydown',function(event){
  if(event.keyCode===13){
    startDiv.style.visibility = 'hidden'; 
    loadGame();}
});

//Draw Background
drawScene1(startState.x,startState.y);
drawScene2(startState2.x,startState2.y);
