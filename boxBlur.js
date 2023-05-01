
//hard to get to 3X3 squares.
//rest not too bad
//trick was to get the 4 first squares then make the 3X3 from those. 


function solution(image) {

    
    
    const ans = []
    for(let i = 0; i<image.length-2; i++){
      const matrix = []
      //console.log(image[i][j])
      for(let j = 0; j<image[0].length-2; j++){
        //to get those 3X3 squares:
        const top = image[i][j] + image[i][j+1] + image[i][j+2]
        const mid = image[i+1][j] + image[i+1][j+1] + image[i+1][j+2]
        const bot = image[i+2][j] + image[i+2][j+1] + image[i+2][j+2]
        //sum divided by number of values rounded down. 
        matrix.push(Math.floor((top+mid+bot)/9))
      }
      ans.push(matrix)
    }
    return ans 
    

}
//tests:
console.log(solution([[1, 1, 1], 
         [1, 7, 1], 
         [1, 1, 1]]))
         
//ans should be [[1]]
console.log(solution([[7, 4, 0, 1], 
         [5, 6, 2, 2], 
         [6, 10, 7, 8], 
         [1, 4, 2, 0]]))
//answer should be
//[[5, 4],
// [4, 4]]

