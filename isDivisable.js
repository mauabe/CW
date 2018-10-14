function isDivisible(divisee, divisor) {
  if(divisee % divisor === 0){
    return true
  }
  else return false;
 }
 
 // tests
 
 function testIsDivisible() {
   if (isDivisible(10, 2) && !isDivisible(11, 2)) {
     console.log('SUCCESS: `isDivisible` is working');
   }
   else {
     console.log('FAILURE: `isDivisible` is not working');
   }
 }
 
 testIsDivisible();