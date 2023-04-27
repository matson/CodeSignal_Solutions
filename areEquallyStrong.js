function solution(yourLeft, yourRight, friendsLeft, friendsRight) {

  const myMax = Math.max(yourLeft, yourRight)
  const friendsMax = Math.max(friendsLeft, friendsRight)
  if(friendsMax !== myMax) return false;
  return yourLeft + yourRight === friendsRight + friendsLeft //true;
  

}

console.log(solution(10,15,15,10));
//true
console.log(solution(15,10,15,10));
//true
console.log(solution(15,10,15,9));
//false
console.log(solution(10,15,5,20))
//false




