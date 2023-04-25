function solution(inputArray) {
    a = inputArray;
    let counter = 0;
    //compare the values
    a.reduce((a,b) => {
      if(a >= b){
        //if decrease
        const diff = (a+1) - b;
        counter+= diff;
        return a+1;
      }
      return b;
    })
    return counter;
  }
  
  //tests:
  console.log(solution([1,1,1]));
  //should be 3
  console.log(solution([-1000,0,-2,0]));
  //should be 5
  console.log(solution([2,1,10,1]));
  //should be 12
  
  
  