

function solution(n, firstNumber) {
    //create the number array without a range function
    let halfValue = n/2
    let numArray = []
    for(var i = 0; i<n; i++){
      numArray.push(i);
    }
    if(firstNumber < halfValue){
      return numArray[firstNumber + halfValue]
    }
    return numArray[firstNumber - halfValue]
  
  }
  //tests:
  console.log(solution(10,2))
  //7
  console.log(solution(10, 7))
  //2
  