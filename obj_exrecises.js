function getFirstElementOfProperty(obj, key) {
  for(let arr in obj[key]){
    if(Array.isArray(obj[key])){
      return obj[key][arr[0]];
    }
  }
}

function getLastElementOfProperty(obj, key) {
    if(!Array.isArray(obj[key])){
          return undefined;
    }
    let elem = obj[key].length-1;
    for(let arr in obj[key]){
       if(Array.isArray(obj[key])){
          return obj[key][elem];
    }
  }
}

function getNthElementOfProperty(obj, key, n) {
  if(!Array.isArray(obj[key])){
    return undefined;
  } else return obj[key][n];

}
function sumDigits(num) {
var dArr = num.toString().split('').map(Number);
console.log (dArr)
var sum = dArr.reduce((a, b) => {a+b}, 0);
console.log(sum);
}



function sumDigits(num) {
  var starting = 0;
  var sum = 0;
  var numString = num.toString(); // var numString = '1148'
  if (num < 0) {
    sum -= Number(numString[1]);
    starting += 2;
  }
  for (var i = starting; i < numString.length; i++) {
    sum += Number(numString[i]);
  }
  return sum;
}

var output = sumDigits(-1148);
console.log(output); // --> 14

//var output = sumDigits(-316);
//console.log(output); // --> 4
