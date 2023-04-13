//Find the Century: 


function solution(year) {
  
    //if years are 100, 200, 300 etc.
  if (year % 100 == 0) {
    var century = year / 100
    return century;
  }
  //if years are like 1934, 904, 567, etc. 
  var century = Math.floor(year / 100) + 1
  return century;
}

//tests:
console.log(solution(300))
console.log(solution(1888))
console.log(solution(1300))

