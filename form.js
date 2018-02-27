'use strict';
var form = document.getElementById('form');
var formSubmit = document.getElementById('submit');
var formLevel = document.getElementById('levels');
var level = 1;
User.allUsers = [];

function User(name, level, highScore) {
  this.name = name;
  this.level = level;
  this.highScore = highScore;
  User.allUsers.push(this);
}

function levelHandler(e) {
  console.log(e.target.value);
}
formLevel.addEventListener('change', levelHandler);

function submitHandler(e) {
  e.preventDefault();
  var currentLevel = e.target.levels.value;
  var userName = e.target.name.value;
  console.log(currentLevel);
  console.log(userName);
}
formSubmit.addEventListener('submit', submitHandler);