function solution(a) {

    //traverse through array
    //if odd index, save sum
    //if even index, save sum 
    //return new array
    var index = -1; //keep track of index
    var sumEven = 0;
    var sumOdd = 0;
    var newArray = [];
    for(var i = 0; i<a.length; i++){
      index++;
      //if it's odd
      if(index % 2 !== 0){
        sumOdd+=a[index];
      }
      //if it's even
      else{
        sumEven+=a[index];
      }
    }
    //make new array
    newArray.push(sumEven);
    newArray.push(sumOdd);
    return newArray
    
  
  }
  
  //tests:
  console.log(solution([100,50]))
  // //100, 50 
  console.log(solution([80]))
  // //80, 0
  console.log(solution([100,50,50,100]))
  //150, 150 
  