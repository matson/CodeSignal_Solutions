function solution(inputArray) {
    //find the max. diff between any two adjacent elements
    const diff = []
    inputArray.reduce((a,b) =>{
      diff.push(Math.abs(a-b))
      return b
    })
    return Math.max(...diff)
   
}

console.log(solution([2, 4, 1, 0]));
//should be 3
console.log(solution([1, 1, 1, 1]));
//should be 0

