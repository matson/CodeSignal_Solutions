function solution(inputString) {
    a = inputString.split('.')
    //needs to be 4 integers;
    if (a.length === 4) {
      const result = a.every(number => {
        //numbers will be less than 255 and greater than 0.
        //if there are more than 2 .'s false;
        //if leading zeros.... false
        if (number.length > 0 && number.length === Number(number).toString().length && number >= 0 && number <= 255) return true;
        return false;
  
      })
      return result;
  
  
    }
    return false;
  
  
  }
  
  //tests:
  console.log(solution("172.16.254.1"))
  //true
  console.log(solution("172.316.254.1"))
  //false
  console.log(solution(".254.255.0"))
  //false
  
  // 192.168.0.1 is a valid IPv4 address
  // 255.255.255.255 is a valid IPv4 address
  // 280.100.92.101 is not a valid IPv4 address because 280 is too large to be an 8-bit integer (the largest 8-bit integer is 255)
  // 255.100.81.160.172 is not a valid IPv4 address because it contains 5 integers instead of 4
  // 1..0.1 is not a valid IPv4 address because it's not properly formatted
  // 17.233.00.131 and 17.233.01.131 are not valid IPv4 addresses because they contain leading zeros
  
 
  
  