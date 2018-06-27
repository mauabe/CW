////////
// 1
////////

// function helloPerson(name){
//   var greeting = 'Hello, ' + name;
// return greeting;
// }
// helloPerson('Mauricio');

// ////////
// // 2
// ////////

// function oppositeDay(bool){
//   if(bool === true){
//     return false;    
//   }
//   if(bool === false){
//     return true;
//   }
// }
// // oppositeDay(true);


// ////////
// // 3
// ////////

// function get10thChar(string){
//   return string[9];
// }

// //get10thChar('123456789peleven');


// ////////
// // 4
//////// 

// function indexesOnly(array){
//   for(let i = 0; i < array.length; i++){
//     array[i] = i;  
//   }
//   return array;  
// }

// indexesOnly(['a', 'b', 'c', 10, true]);

////////
// 5
////////

// function myLaptopInfo(){
//   var obj = {
//     type : 'Macbook Air',
//     color : 'Burgundy',
//   yearPurchased :'2016'
//   }
//   return obj;
// }
//console.log(myLaptopInfo());

////////
// 6
////////

function sayFavoriteFood(obj){
  var taste = obj.name + "'s favorite food is " + obj.favoriteFood;
  //console.log(taste);
  return taste;
  
}

// var person = { name : "John", favoriteFood : "tacos" };
// sayFavoriteFood(person);