
function solution(inputString) {
    //make string into array
    const array = inputString.split('') 
    //create a tally array
    const tally = []
    array.map(element=>{
      if(tally[element]){
        tally[element]++
      }else{
        tally[element] = 1
      }
    })
  //console.log(tally)
  //Rules
  var oddCount = 0;
  for(i in tally){
    if(tally[i]%2 === 1){
      oddCount++;
    }
  }
  if(oddCount > 1){
    return false;
  }
  return true;
 
    

}
//Tests:
console.log(solution("aabb"))
//true
console.log(solution("abbcabb"))
//true
console.log(solution("zaa"))
//true

//This question was super fun
