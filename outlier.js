// const oddNumbers = [1,2,34,54,55,34,32,11,19,17,54,66,13].filter((number) => number%2!==0);
// console.log(oddNumbers);

//const integers = [3,5,8];  //test this array

function findOutlier(integers){
  const integersEven = integers.filter((el) => ((el % 2) === 0));
  const integersOdd = integers.filter((el) => ((el % 2) !== 0));
  // console.log(integersEven);
  // console.log(integersOdd)
     if(integersEven.length === 1){return integersEven[0]}
     else if(integersOdd.length === 1){return integersOdd[0]}
}
console.log (findOutlier([3,2,8]))  //3
console.log(findOutlier([2,3,5]))  //2
