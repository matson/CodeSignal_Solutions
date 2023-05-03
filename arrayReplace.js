function solution(inputArray, elemToReplace, substitutionElem) { 
    const arr = []
      for(let i = 0; i<inputArray.length; i++){
        if(inputArray[i] === elemToReplace){
          //push the sub
          arr.push(substitutionElem)
        }
        else{
          arr.push(inputArray[i])
        }
      }
    return arr
  
  }
  //tests: 
  console.log(solution([1, 2, 1],1,3))
  //output should be [3, 2, 3]
  

  //Alternative Way:

function arrayReplace(inputArray, elemToReplace, substitutionElem){
    return inputArray.map(element=> element === elemToReplace ? substitutionElem : element)
}
  