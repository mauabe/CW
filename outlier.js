const oddNumbers = [1,2,34,54,55,34,32,11,19,17,54,66,13].filter((number) => number%2!==0);
console.log(oddNumbers);



function findOutlier(integers){
    for (let i = 0; i < integers.length; i++){
      const integersEven = integers.filter(integers[i] % 2 === 0);
        if(integersEven.lenght == 1){
        return integers[i];
        }
        
        else (console.log( integers[i] % 2 != 0));
  }
  }