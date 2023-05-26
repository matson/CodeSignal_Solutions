function solution(value1, weight1, value2, weight2, maxW) {
    //carry both items?
    if(weight1 + weight2 <= maxW){
      return value1 + value2;
    }
    //Can we carry item 1 but not item 2?
    else if(weight1 <= maxW && weight2 > maxW){
      return value1;
    }
    //Can we carry item 2 but not item 1?
    else if(weight2 <= maxW && weight1> maxW){
      return value2;
    }
    //if both items are too heavy...
    else if(weight1 > maxW && weight2 > maxW){
      return 0
    }
    else{
      return value2 > value1 ? value2 : value1;
      
    }
}
console.log(solution(10,5,6,4,8))
//10
