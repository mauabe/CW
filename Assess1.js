//Exercise 1

function billTotal(subTotal) {
  var total = subTotal + (subTotal * 0.15) + (subtotal * 0.095);
  return total;
}

//Do not worry about formatting your output to round to the nearest 2nd decimal number.
billTotal(125); //155.625
billTotal(220); //273.9

// Exercise 2

function range(start, end) {
 if(end <= start){ return []};
 var array = [];
 for( let i = start; i < end; i++){
  array.push(i);
 }
}

//Exercise 3

var person = {
   name : {
      first : "Alyssa",
      middle: "P",
      last: "Hacker"
   },
   age : 26
}
 //"Alyssa P Hacker"
 
function getFullName(person){    
  var fullName = person['name']['first'] + ' ' + person['name']['middle'] + ' ' +person['name']['last'];
  return fullName;
}
getFullName(person);


// Exercise 4

var personB = {
   name: {
      first: "Ben", 
      last: "Bitdiddle"
   }, 
   age: 34
}

//"Ben Bitdiddle"
function getFullName(person) {
var fullName = personB['name']['first'] + ' ' + personB['name']['middle'] + ' ' +personB['name']['last'];
var fullNameB = personB['name']['first'] + ' ' + personB['name']['last'];
  if(!personB['name']['middle']){
        return fullNameB;
    } else {
      return fullName;
      }
  }

getFullName(personB);

//Exercise 5

//Exercise 5

var people = [
  {name: {first: "Alyssa", middle: "P", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reason"}, age: 21}
];

function longestName(people) {
  
   var longStringArr = function getFullName(people) {
    var array = [];  
    var fullName = person['name']['first'] + ' ' + person['name']['middle'] + ' ' +person['name']['last'];
    var fullNameB = person['name']['first'] + ' ' + person['name']['last'];
      if(!personB['name']['middle']){
            return array.push(fullNameB);
        } else {
          return array.push(fullName);
          }
   };
   var longStr = longStringArr.reduce(function (a,b) {
    if(a.length > b.length){
      return a
    } else {
      return b
      }
    });
     return a  
  }
  var arrLong = longStr.split(' ')
  var result = {};
  function newObj(){
    if (arrLong.length === 3){
  result['name']['first'] = arrLong[0];
  result['name']['middle'] = arrLong[1];
  result['name']['last'] = arrLong[2];
  } else {
    result['name']['first'] = arrLong[0]; 
    result['name']['lastt'] = arrLong[1];
   }
  return result;
  }
/// needs to add {age:xx}
}

longestName(people);
// => {name: {first: "Alyssa", middle: "P", last: "Hacker"}, age: 26}