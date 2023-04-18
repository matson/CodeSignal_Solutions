function solution(inputArray) {
    
    //go through array
    //count characters
    //if the one greater than the next
    //find greatest number; store
    //add to the new array (strings with the greatest number)
  
    var long = 0;
    var newArray = [];
    for(let i = 0; i<inputArray.length; i++){
      //find the longest string
      if(inputArray[i].length > long){
        //save value to variable
         long = inputArray[i].length;
      }
    }
    
    for( let j = 0; j<inputArray.length; j++){
      if(inputArray[j].length === long){
        newArray.push(inputArray[j]);
      }
    }
  
    return newArray;
  
  }

  //tests:
  console.log(solution(["aba", "aa", "ad", "vcd", "aba"]));
  console.log(solution(["aba", "aa", "ad", "vcd", "aba", "fhgtks"]));
  
  