
function solution(a) {

    //take the people out first
    const people = a.filter(element => element != -1);
    //sort people in ascending order:
    const sortedPeople = people.sort((a, b) => a - b);
    //put trees back:
    let i = -1;
    return a.map(value => {
      if (value === -1) return -1
      i++
      return a = sortedPeople[i];
    })
  }
  
  //tests:
  console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))
  //should be [-1, 150, 160, 170, -1, -1, 180, 190]
  console.log(solution([-1, -1, -1, -1, -1]))
  //should be [-1, -1, -1, -1, -1]
  console.log(solution([4, 2, 9, 11, 2, 16]))
  //should be [2, 2, 4, 9, 11, 16]
  console.log(solution([2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1]))
  //should be [1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2]
  
  //take all numbers out of old array
  //make a new one, compare the numbers
  //plug each one asc order left to right
  