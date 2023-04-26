function solution(statues) {

    //number of statues
    var statueNum = 0;
  
    var sortedStatues = statues.sort(function(a, b){return a - b})
    for(let i = 0; i<sortedStatues.length-1; i++){
      //console.log(i)
      if(sortedStatues[i+1] - sortedStatues[i] > 1 ){
        var difference = (sortedStatues[i+1] - sortedStatues[i]) - 1 
        statueNum = statueNum + difference
      }
    }
    return statueNum;
  
  }
  
  //tests:
  console.log(solution([6,2,3,8]))
  console.log(solution([1,1,4,9]))
  