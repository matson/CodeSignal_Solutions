//a good pattern one.

function solution(cell1, cell2) {
    
    //build the board?
    //or is there a pattern?
  //There is a pattern:
  const letters = 'ABCDEFGH'
  cell1 = letters.indexOf(cell1[0]) + Number(cell1[1])
  cell2 = letters.indexOf(cell2[0]) + Number(cell2[1])
  return cell1 % 2 === cell2 % 2

}
//tests:
console.log(solution("A1","C3"))
//true
console.log(solution("A1","H3"))
//false
