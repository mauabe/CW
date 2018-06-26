function countWords(str) { 
  var obj = {};
  if (str == ''){
    return obj;
  }
  
  var arr = str.split(' ');
  for(var i = 0; i < arr.length; i++){
    if(arr[i] in obj){
      obj[arr[i]] += 1;
    } else {
        obj[arr[i]] = 1;
    }
  }
  return obj;
}