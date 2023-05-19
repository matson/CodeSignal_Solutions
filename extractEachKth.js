function solution(inputArray, k) {
    var counter = 1;
    for(let i = 0; i<inputArray.length; i++){
      console.log(counter)
      if(counter == k){
        inputArray.splice(i,1)
        i = i - 1
        //reset counter
        counter = 1
      }else{
        counter = counter + 1
      }
    }
    return inputArray
  }
  console.log(solution([1,2,3,4,5,6,7,8,9,10],3))
  //[1,2,4,5,7,8,10] k = 3
  console.log(solution([1, 1, 1, 1, 1],1))
  //[] k = 3
  console.log(solution([1, 2, 1, 2, 1, 2, 1, 2],2))
  //[1, 1, 1, 1] k = 2