// Using the JavaScript language, have the function FirstReverse(str) take the str parameter 
// being passed and return the string in reversed order. For example: if the input string 
// is "Hello World and Coders" then your program should return the string 
// sredoC dna dlroW olleH. 

function FirstReverse(str) { 
  // code goes here  
  var strSplit = str.split("");
  var strReversed = strSplit.reverse();
  str = strReversed.reduce((a,b) => a+b);
    return str; 
         
}
   
// keep this function call here 
FirstReverse("hello");                            



