//Find if String is a Palindrome:


function solution(inputString) {
  
  //using built-in functions: 
  var reverseStr = inputString.split('').reverse().join(''); 
  //console.log(reverseStr)
  if (reverseStr === inputString) {
    return true
  }
  else{
    return false
  }
}

//tests:
console.log(solution("eye"))
console.log(solution("racecar"))
console.log(solution("tree"))

