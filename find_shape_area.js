function solution(n) {
    
    //finding the area
    //add value to previous value, and so forth
    if(n == 0){
        return 0;
    }
    if(n>0){
        return ((n*n) + (n-1) * (n-1))
        
    }  

}

//test:
console.log(solution(2))
console.log(solution(3))