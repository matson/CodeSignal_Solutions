function solution(n) {
    
    //determine if
    //return true or false if
    //sum of first half is = to sum of second half

    //take number, traverse through only half of it;
    const newTicket = Array.from(String(n), Number)
    const luckyLength = Math.ceil(newTicket.length / 2);
    const firstHalf = newTicket.splice(0, luckyLength);   
    const secondHalf = newTicket.splice(-luckyLength);
    //add the numbers up, store, do the same for the other half. 
    var sum1 = 0;
    var sum2 = 0;
    for(let i = 0; i<firstHalf.length; i++){
      sum1+=firstHalf[i]
    }
    for(let j = 0; j<secondHalf.length; j++){
      sum2+=secondHalf[j]
    }
    //add the numbers up, store, do the same for the other half. 
    //if the numbers aren't equal; false
    //if the numbers are; true.
    if(sum1 === sum2){
      return true;
    }
    else{
      return false;
    } 
}
//tests:
console.log(solution(123456))
console.log(solution(1230))

