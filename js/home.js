"use strict";

var currentUser;

//DOM
var submitInfo = document.getElementById("submitInfo");

//object
function User (name, level) {
 this.name = name;
 this.level = level;
}

function storeUser () {
 localStorage.setItem('currentuser', JSON.stringify(currentUser));
}

function handleSubmitInfo (event) {
 event.preventDefault();
 var newPlayerName = event.target.name.value;
 var newLevel = event.target.level.value;
 console.log(event.target.name.value);
 console.log(event.target.level.value);
 currentUser= new User(newPlayerName,newLevel);
 storeUser();
 window.location = 'game.html';
}
//event listener
submitInfo.addEventListener('submit', handleSubmitInfo);