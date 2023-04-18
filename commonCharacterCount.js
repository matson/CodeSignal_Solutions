function solution(s1, s2) {

    //key is counting the frequency
  
    // To store the frequencies of
          // characters of string s1 and s2
          let freq1 = new Array(26);
          let freq2 = new Array(26);
          freq1.fill(0);
          freq2.fill(0);
          // console.log(freq1)
          // console.log(freq2)
   
          // To store the count of valid pairs
          let i, count = 0;
      
          // Update the frequencies of
          // the characters of string s1
          for (i = 0; i < s1.length; i++)
              freq1[s1[i].charCodeAt() - 'a'.charCodeAt()]++;
   
          // Update the frequencies of
          // the characters of string s2
          for (i = 0; i < s2.length; i++)
              freq2[s2[i].charCodeAt() - 'a'.charCodeAt()]++;
   
          // Find the count of valid pairs
          for (i = 0; i < 26; i++)
              count += (Math.min(freq1[i], freq2[i]));
   
          return count;
      
      
  
  }
   //tests:
  console.log(solution("aabcc","adcaa"))
  console.log(solution("zzzz", "zzzzzz"))
  