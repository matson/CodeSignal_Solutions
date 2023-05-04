//need to fix. 

function solution(name) {

    const n = name.split("")
  //isNaN == not a number
    if(isNaN(n[0])){
      //if it does not start with a digit...
      const result = n.every(element=> {
        if(!(isDigit(element)) || isUnderscore(element) || isLetter(element)) return false;
        return true;
      })
      return result;
      
      
    }
    return false;
}


function isDigit(c) {
  return '0123456789'.indexOf(c) !== -1;
}

function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
  
}
function isUnderscore(c) {
  return '_'.indexOf(c) !== -1;
}


//tests
console.log(solution("var_1__Int"))
//true
console.log(solution("_f"))
console.log(solution("qq-q"))
//false
console.log(solution("2w2"))
//false


  
  
