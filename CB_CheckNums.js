function CheckNums(num1,num2) { 
  if(num2 > num1){
      return true;
  } else if (num1 > num2){
      return false;
  } else return -1;
  
  // code goes here  
  return num1 + num2; 
         
}
   
// keep this function call here 
CheckNums(readline());




function TimeConvert(num) { 
  let hours = Math.floor(num / 60);
  let minutes = num % 60;
  return (hours+":"+minutes)
  // code goes here  
  //return num; 
         
}
   
// keep this function call here 
TimeConvert(readline());