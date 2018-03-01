'usestrict';
//var content=JSON.parse(localStorage.getItem('score'));
var content=new Object;
content.name='Dick Greyson';
content.score='1995';
console.log(tableRow);
var table=document.getElementById('Table');
//for(var i; i<content.length&&i<10;)
//{
  var tableRow=document.createElement('tr');
  console.log(tableRow);
  var nameData=document.createElement('td');
  nameData.textContent=content.name;
  console.log(tableRow);
  var scoreData=document.createElement('td');
  scoreData=content.score;
  console.log(tableRow);
  tableRow.appendChild(nameData);
  console.log(tableRow);
  tableRow.appendChild(scoreData);
  table.appendChild(tableRow);
//}