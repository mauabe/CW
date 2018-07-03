//// Return Largest Number in Array

function getLargestElement(arr) {
  return arr.reduce((a, b) => Math.max(a, b));
}

/////////// Return factorial of two  numbers
function multiplyBetween(num1, num2) {
  if(num1 >= num2){return 0};
  var array = [];
  for (var i=num1; i< num2; i++){
    array.push(i);
  }
  var mult =array.reduce((a,b)=>(a*b));
  return mult;
}

function computeSumBetween(num1, num2) {
  if(num1 >= num2){return 0};
  var array = [];
  for (var i=num1; i< num2; i++){
    array.push(i);
  }
  var sum =array.reduce((a,b)=>(a+b));
  return sum;
}
