'use strict';
var startDiv = document.getElementById('start-container');
var startCanvas = document.getElementById('start-canvas');
var startCtx = startCanvas.getContext('2d');
//Global start game bool
var gameStarted = false;
//Creating start button image element
var img = document.createElement('img');
img.setAttribute('src', 'img/start-button.png');
startDiv.appendChild(img);

startCtx.fillStyle = 'rgba(200, 200, 200, 0.75)';
startCtx.fillRect(0, 0, startCanvas.width, startCanvas.height);

startDiv.addEventListener('click', function(e){
  //Checks if user clicked on start button
  if(e.clientX > 296 && e.clientX < 642 && e.clientY < 409 && e.clientY > 276) {
    if(!gameStarted) { 
      startDiv.style.visibility = 'hidden'; 
      loadScripts();
    }
    console.log('div clicked');
  }
  //Start up game
});

document.addEventListener('DOMContentLoaded', function() {
  alert('Game state: win/lose');
}, false);


function loadScripts() {
  var script = document.createElement('script');
  script.src = "obstacle.js";
  document.getElementsByTagName('body')[0].appendChild(script);

  script = document.createElement('script');
  script.src = "projectile.js";
  document.getElementsByTagName('body')[0].appendChild(script);

  script = document.createElement('script');
  script.src = "collision.js";
  document.getElementsByTagName('body')[0].appendChild(script);

  script = document.createElement('script');
  script.src = "game2.js";
  document.getElementsByTagName('body')[0].appendChild(script);
}