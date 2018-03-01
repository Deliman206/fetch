// 'use strict';
// var frisbeeObj = new Frisbee();
// var ctxP = document.getElementById('obstacles').getContext('2d');

// function Frisbee() {
//   this.startState = {
//     x : 0,
//     y : 250
//   }; 
//   this.endState = {
//     x : 800,
//     y : 0
//   };
//   // this.slowStateF = {
//   //   x = 1600/3,
//   //   y = 4000/24
//   // };
//  this.image = new Image();
//  this.image.src = 'img/fris_4.png';
// }

// Frisbee.prototype.launch = function() {
//  var interval = setInterval(()=>{
//    ctxP.clearRect(0, 0, 900 ,500);
//    ctxP.drawImage(this.image, this.startState.x, this.startState.y, 60, 25);
//    if(this.startState.x < this.endState.x) { this.startState.x += 2; }
//    if(this.startState.y > this.endState.y) { this.startState.y -= 5/8; }
//    if(this.startState.x >= this.endState.x && this.startState.y <= this.endState.y) { clearInterval(interval);  }//this.draw();
//  }, 5);
// };

// //Draws the frisbee at (x:400, y:0), slowly falls to ground
// // Frisbee.prototype.draw = function() {
// //  const ground = 400;
// //  this.state.x = 800;
// //  this.state.y = 0;
// //  var interval = setInterval(()=>{
// //    ctxP.clearRect(0, 0, 900, 500);
// //    ctxP.drawImage(this.image, this.state.x, this.state.y, 60, 25);
// //    this.state.y += .1;
// //    //If frisbee has hit the ground = stop execution
// //    if(this.state.y === ground) { clearInterval(interval); }
// //  }, 10);
// // };
// //Conditional logic to render these in order
// // if coordinate (state.x, state.y) is at endCoordinate (400, -50) 
// //then stop moving and move down

// frisbeeObj.launch();
// // frisbeeObj.draw();