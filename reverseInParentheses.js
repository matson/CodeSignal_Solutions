//difficulty:
//eh was kinda hard for me. 

function solution(inputString) {
    //filter out the ():
    //find the () , reverse the string in there and place back
    //find the indexes of ()

    //make this easy to follow instead of using name 
    let x = inputString

    //while loop: 
     while(x.includes('(')){
           const index2 = x.indexOf(')'); 
           const index1 = x.lastIndexOf('(', index2); 
           const s  = x.slice(index1 + 1, index2)
           //reverse the string - array then reverse
           const reversedS = s.split('').reverse().join('') 
           //build array 
           x = x.slice(0,index1) + reversedS + x.slice(index2 + 1)
  
        }
  return x
}


//tests:
console.log(solution("(bar)"))
//"rab"
console.log(solution("foo(bar)baz"))
//foorabbaz


