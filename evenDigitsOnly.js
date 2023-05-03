function solution(n) {
  
    const myArr = String(n).split("").map((n)=>{
      return Number(n)
    })
    for(let i = 0; i<myArr.length; i++){
      if(myArr[i] % 2 !== 0){
        return false
      }
    }
    return true;
  

}

//tests:
console.log(solution(248622))
//true
console.log(solution(642386))
//false

//Alternative: 
function evenDigitsOnly(n) {
    //every goes through every element
    return n.toString().split('').every(element=>Number(element) % 2 === 0)
}