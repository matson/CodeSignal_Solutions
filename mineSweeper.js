function solution(matrix) {
    const mineSweeper = []
    for(let i = 0; i<matrix.length; i++){
      mineSweeper.push([])
      for(let j = 0; j<matrix[0].length; j++){
        mineSweeper[i][j] = 0

        //go through each possible square and define where it could be undefined. 
        
       
        //Above
        if(matrix[i-1] !== undefined){
          //if true:
          if(matrix[i-1][j]){
            mineSweeper[i][j]++
          }
        }
        //Below
        if(matrix[i+1] !== undefined){
          //if true:
          if(matrix[i+1][j]){
            mineSweeper[i][j]++
          }
        }
        //Left:
        if(matrix[i][j-1] !== undefined){
          if(matrix[i][j-1]){
            mineSweeper[i][j]++
          }
        }
         //Right:
        if(matrix[i][j+1] !== undefined){
          if(matrix[i][j+1]){
            mineSweeper[i][j]++
          }
        }
        //Top Left
         if(matrix[i-1] !== undefined){
          if(matrix[i-1][j-1]){
            mineSweeper[i][j]++
          }
        }
        //Top Right
         if(matrix[i-1] !== undefined){
          if(matrix[i-1][j+1]){
            mineSweeper[i][j]++
          }
        }
            
        //Bottom Left
         if(matrix[i+1] !== undefined){
          if(matrix[i+1][j-1]){
            mineSweeper[i][j]++
          }
        }
        //Bottom Right
         if(matrix[i+1] !== undefined){
          if(matrix[i+1][j+1]){
            mineSweeper[i][j]++
          }
        }
         
      } 
      //console.log(mineSweeper)
    }
    
      return mineSweeper;
  
  
  }
  
  //tests:
  console.log(solution([[true, false, false],
  [false, true, false],
  [false, false, false]]))
  // ans:               [[1, 2, 1],
  //                     [2, 1, 1],
  //                     [1, 1, 1]]