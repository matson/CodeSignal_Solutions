function solution(a) {
    //if even length; return the index of 
    return a.length % 2 === 0 ? a[a.length/2 - 1] :
      a[Math.floor(a.length/2)]
    //if not round and return 
  }
  //tests: 
  console.log(solution([2,4,7]))
  //4
  console.log(solution([2,3]))
  //2
  
//med.  