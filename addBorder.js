function solution(picture) {
    //insert border around each row
    //then top and bottom is the value plus letters and row border.
    const sidePicture = picture.map(element => '*' + element + '*')
    let border = []
    for(let i = 0; i < sidePicture[0].length; i++){
      border.push('*')
    }
    border = border.join('')
    //push to end
    sidePicture.push(border);
    //push to beginning
    sidePicture.unshift(border);
    return sidePicture;
    
  
  }
  
  
   console.log(solution(["abc",
                         "ded"]))
                        
  // should be           ["*****",
  //                      "*abc*",
  //                      "*ded*",
  //                      "*****"]
  
  console.log(solution(["a"]))
  
  // should be     ["***", 
  //                "*a*", 
  //                "***"]
  