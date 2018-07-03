decorate Class with ages.js


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//
function decorateClassListWithAges (classList){

  // function randNum(max, min){
  //   Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) +1) + min);
  // }


  var result = [];
  classList.forEach(function(students){
    result.push({ "name" : students , "age" :  Math.round(Math.random()) + 10})
  });
  return result;
}


//   var array = [];
//   for (let i = 0; i < classList.length; i++){
//     array.push({name : classList[i], age : randNum(11,10)});
//   }
//   return array;

// }
//

  // var newArray = classList.map(function(student){
  //   {name: student, age: randNum(11, 10)}
  // });    return newArr



function assertEquals (actual, expected, testName) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("passed");
  } else {
    console.log("FAILED [" + testName + "] Expected \"" + expected + "\", but got \"" + actual + "\"");
  }
}
