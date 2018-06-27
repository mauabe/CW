function modulo(num1, num2) {
   
   if (num2 === 0 || isNaN(num1) || isNaN(num2)) {return NaN;}
   
  var plus = num1 >= 0;
  
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);
  
  while (num1 >= num2) {
    num1 = num1 - num2;
  }
  
  return plus ? num1 : -num1;

}