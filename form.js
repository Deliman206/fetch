'use strict';
var name;
var level;
var form = document.getElementById('form');
var formName = document.getElementById('name');
var formSubmit = document.getElementById('submit');
var formLevel = document.getElementById('levels');

function levelHandler(e) {
  console.log(e);
}
formLevel.addEventListener('change', levelHandler);

function submitHandler(e) {
  e.preventDefault();
  var name = e.target.name.value;
  var level = e.target.levels.value;
  console.log(name);
  console.log(level);
}
formSubmit.addEventListener('click', submitHandler);