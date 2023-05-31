function solution(str) {
    // The variable that contains the unique values
    let uniq = "";
    for(let i = 0; i < str.length; i++){
        // Checking if the uniq contains the character
        if(uniq.includes(str[i]) === false){
          // If the character not present in uniq
          // Concatenate the character with uniq
          uniq += str[i]
        }
    }
    return uniq.length
}
console.log(solution("cabca"))
//3
console.log(solution("aba"))
//2
console.log(solution("ccccccccccc"))
//1
