function solution(n) {
    //one digit number will always be 0.
    //ints and string array casting is different!
    let myFunc = num => Number(num);
    var intArr = Array.from(String(n), myFunc)
    var digitDegree = 0;
    if(intArr.length == 1){
        digitDegree = 0
    //if more than one digit...
    }else{
        while(true){
          digitDegree++
          n = n.toString().split("").reduce((a,b)=>{
            return parseInt(a) + parseInt(b);
          })
          if(n<=9){
            break;
          }
        }
        
    }
    return digitDegree

}
console.log(solution(5))
//0
console.log(solution(9))
//0
console.log(solution(100))
//1
console.log(solution(91))
//2
