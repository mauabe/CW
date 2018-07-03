object to array.js

function getAllKeys(obj) {
  var array = [];
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      array.push(key);
    }
  }
  return array; 
}

var obj = { name : 'Sam', age : 25, hasPets : true };
// return ['name', 'age', 'hasPets'];



function listAllValues(obj) {
 var array = [];
 for (let key in obj){
   array.push( obj[key])
 }
 return array;
}

var obj = {
  name : 'Krysten',
  age : 33,
  hasPets : false
}
//return  ['Krysten', 33, false]


function convertObjectToList(obj) {
  var array = [];
  var newArray = [];
  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      array.push([key, obj[key]]);
    }
  }
  return array; 
 }

 var obj = {
  name: 'Holly',
  age: 35,
  role: 'producer'
}
//Return    [['name', 'Holly'], ['age', 35], ['role', 'producer']]