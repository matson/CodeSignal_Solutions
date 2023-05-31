function solution(inputString) {
    //prefix which only has numbers
    var numArray = []
    let splitArr = inputString.split("")
    let i = 0
    while(!isNaN(splitArr[i]) && !white(splitArr[i])){
      numArray.push(splitArr[i])
      i++
      if(isNaN(splitArr[i])){
        break;
      }
    }
  return numArray.join("").toString()
}
function white(value){
   return value.indexOf(' ') >= 0;
}


console.log(solution("123aa1"))
//123
console.log(solution("0123456789"))
//"0123456789"
console.log(solution("12abc34"))
//12
console.log(solution("aaaaaaa"))
//""