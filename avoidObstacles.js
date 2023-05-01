//This concept was a little tricky to understand.  

function solution(inputArray) {

    //need modulus to see if will hit obs.
    //if return 0 then it's a hit
    
    for(let i = 1; ;i++){
  if(inputArray.every(element => element % i))
    return i
    }
}
    



