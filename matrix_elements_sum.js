function solution(matrix) {

    var count = 0;
    for(let i = 0; i<matrix.length; i++){
      for(let j = 0; j<matrix[0].length; j++){
        //if within bounds and value == 0:
        if(matrix[i][j] == 0 && i+1 <matrix.length){
          
          //index column is also 0
          matrix[i+1][j] = 0;
        }
        //add to price: 
        count = count + matrix[i][j]
      }
    }
    return count;
      
  
  }
  
//tests:
console.log(solution([[0, 1, 1, 2], 
            [0, 5, 0, 0], 
            [2, 0, 3, 3]])) 
console.log(solution([[1, 1, 1, 0], 
             [0, 5, 0, 1], 
             [2, 1, 3, 10]]))
  