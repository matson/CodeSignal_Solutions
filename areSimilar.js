function solution(a, b) {
    //case 1:
    if(a.join('') === b.join('')) return true

    //case 2:
    let array1 = []
    let array2 = []
    for(i in a){
      if(a[i] != b[i]){
        array1.push(a[i])
        array2.push(b[i])
      }
    }
    array2 = array2.reverse().join('');
    array1 = array1.join('')
    if(array1 === array2) return true;
    //case 3:
    return false;
}

//tests:
console.log(solution([1,2,3],[1,2,3]));
//should be true
console.log(solution([1,2,2],[2,1,1]));
//should be false

