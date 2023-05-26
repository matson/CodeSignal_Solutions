function solution(upSpeed, downSpeed, desiredHeight) {
    
    var days = 0
    var plantHeight = 0

    while(plantHeight<desiredHeight){
      days++
      plantHeight += upSpeed
      if(plantHeight < desiredHeight){
        plantHeight -= downSpeed
      }
    }
    return days
    // var heightPlus = upSpeed + currHeight
    // var heightMinus = currHeight - downSpeed
    
    
    
    

}
console.log(solution(100, 10, 910))
//10
console.log(solution(10,9,4))
//1

