
"use strict";

var allUsers = [];

//DOM
var submitInfo = document.getElementById("submitInfo");

//object
function User (name, level) {
 this.name = name;
 this.level = level;
 allUsers.push(this);
}

function checkStorage () {
 if (localStorage.newPlayer) {
   // var newPlayerString = localStorage.getItem(‘newPlayer’);
   localStorage.newPlayerString;
   allUsers = JSON.parse(localStorage.newPlayer);
 }
}

function storeUser () {
 localStorage.allUsers = JSON.stringify(allUsers);
}

function handleSubmitInfo (event) {
 event.preventDefault();
 var newPlayerName = event.target.name.value;
 var newLevel = event.target.level.value;
 console.log(event.target.name.value);
 console.log(event.target.level.value);
 new User (newPlayerName, newLevel);
 storeUser();
 window.location = 'index.html';
}

//localStorage check
checkStorage();
//event listener
submitInfo.addEventListener('submit', handleSubmitInfo);