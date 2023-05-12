function solution(deposit, rate, threshold) {
    var years = 0
    var value = deposit
    while(value < threshold){
      var addPercent = (rate/100)*value
      value+=addPercent
      years++
    }
    return years
      
  
  }
  //tests:
  console.log(solution(100, 20, 170))
  //3
  console.log(solution(100, 1, 101))
  //1
  
//Level: Easy  