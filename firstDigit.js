function solution(inputString) {
    let pointer = 0
    let array = inputString.split("")
  //backwards?
    for(let i = array.length -1; i>=0; i--){
      //if the element is a number;
      if(!isNaN(array[i]) && whiteSpace(array[i]) == false){
        //console.log("here")
        pointer = array[i]
        //console.log(pointer)
        
      }
    }
  return pointer
    

}
function whiteSpace(value){
   return value.indexOf(' ') >= 0;
}
//tests: 
console.log(solution("var_1__Int"))
//should be 1
console.log(solution("q2q-q"))
//should be 2
console.log(solution("0ss"))
//should be 0
console.log(solution("a a_933"))
//should be 9


//console.log(isNaN(string1)) //is not a number -> true
//console.log(isNaN(""))
//console.log(isNaN("a"))
//console.log(isNaN("9"))
