
///Get lenght of string without using propety .length

function getStringLength(string) {
 var x = 0;
 while (string[x] !== undefined){
   x++
 }
  return x;
}


////  USING REDUCE:

function getStringLength(string) {
 var array  = string.split("");
 var total = array.reduce(count =>(count +1 ), 0);
 return total;
}



/// Lenght of shortest element 

function getLengthOfShortestElement(arr) {
  if (arr.length === 0){return 0};
  var shortestX = arr.reduce(function (a, b) {
    if( b.length < a.length){
      return b;
    } else {
      return a;
    }
  });
  return ShortestX.length;
}

/// return shortest element 

function getShortestElement(arr) {
  if (arr.length === 0){return 0};
  var shortest = arr.reduce(function (a, b) {
    if( b.length < a.length){
      return b;
    } else {
      return a;
    }
  });
  return shortest;
}


//// Flatten array of arrays

function joinArrayOfArrays(arr) {
  return arr.reduce(function (acc, cur) {
    return acc.concat(cur)
  }, [ ])
}



function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  var newPrincipal = principal * ((1 + (interestRate / compoundingFrequency)) ** (timeInYears * compoundingFrequency))
  return newPrincipal - principal
  
}

////Multipy without * Operator

function multiply(num1, num2) {
  if(num1 === 0 || num2 === 0){return 0};
  
  if(num1 < 0 && num2 > 0){
    var result = num1;
    for (let i = 1; i < num2; i++){
      result = result + num1;
    }
  return result;
  }
  
  if(num1 > 0 && num2 < 0){
    var result2 = num2;
    for (let i = 1; i < num1; i++){
      result2 = result2 + num2;
    }
  return result2;
  }

  if(num1 < 0 && num2 < 0){
    let longNegs = "i".repeat(-num1).repeat(-num2);
  return longNegs.length;
  }
  
  let longI = "i".repeat(num1).repeat(num2);
  return longI.length;
  
}