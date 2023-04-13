function solution(inputArray) {

    //will find the largest product
    //start from the first value
    var productFinal = inputArray[0] * inputArray[1];
    
    //traverse first: 
    for(let i = 0; i<inputArray.length - 1; i++){
      
      var product = inputArray[i] * inputArray[i + 1];
      if (product >= productFinal){
        productFinal = product;
      }
      
    }
    return productFinal;
  }
  
  //tests:
  console.log(solution([1,2]))
  console.log(solution([-3,4,5,2]))
  console.log(solution([1,1,1,1]))
  console.log(solution([3, 6, -2, -5, 7, 3]))
  console.log(solution([-23, 4, -3, 8, -12]))
  console.log(solution([1, 0, 1, 0, 1000]))
  