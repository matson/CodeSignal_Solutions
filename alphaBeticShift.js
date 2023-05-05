function solution(inputString) {
    
    //a -65
    //z - 90
    return inputString.split('').map(element=>{
      //add one to z then go back to a:
      if(element === 'z') return 'a'
      //add the +1 to the code, then turn back into String
      return String.fromCharCode(element.charCodeAt()+1)
    }).join('')
}
  //tests:
  console.log(solution("crazy"))
  //dsbaz
  console.log(solution("z"))
  //a