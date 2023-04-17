function solution(sequence) {
    var count = 0;
    var index = -1;
    var n = sequence.length
  
    for(let i = 1; i<n; i++){
      //if previous is greater than next:
      if(sequence[i-1] >= sequence[i]){
        count++;
        index = i;
      }
    }
  
    if (count > 1)
      return false;
    if (count == 0)
      return true;
    if(index == n - 1 || index == 1)
      return true;
    if(sequence[index-1] < sequence[index+1])
      return true;
    if(sequence[index - 2] <sequence[index])
      return true;
    return false;
  
  }
  
  //tests:
  console.log(solution([1,3,2,1])) //false
  console.log(solution([1,3,2])) //true
  