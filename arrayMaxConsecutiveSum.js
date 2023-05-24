function solution(inputArray, k) {
    let a = inputArray
    var maxValue = 0;
    for(let i = 0; i<k; i++){
      maxValue += a[i];
      
    }
    var cur = maxValue;
    for(let i = 1; i < a.length - k + 1; i++){
      cur -= a[i-1] // cur = cur - a[i-1]
      cur += a[i+ k -1] //cur = cur + a[i+ k - 1]
      maxValue = Math.max(maxValue, cur)
    }
  return maxValue

}
console.log(solution([2, 3, 5, 1, 6],2))
//8
console.log(solution([2,10,1,1],2))
//12
console.log(solution([1, 3, 2, 4],3))
//9
