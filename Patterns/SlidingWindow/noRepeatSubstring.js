/*
Problem Statement 
Given a string, find the length of the longest substring which has no repeating characters.
Example 1:
Input: String="aabccbb"
Output: 3
Explanation: The longest substring without any repeating characters is "abc".
Example 2:
Input: String="abbbb"
Output: 2
Explanation: The longest substring without any repeating characters is "ab".
Example 3:
Input: String="abccde"
Output: 3
Explanation: Longest substrings without any repeating characters are "abc" & "cde".
*/

const longestNoRepeatSubstr = (string) => {

  let start = 0;
  let longestLength = 0;
  const foundChars = {};

  for (let end = 0; end < string.length; end++) {
    let char = string[end];
    if (!foundChars[char]) {
      foundChars[char] = true;
    } else {
      if ((end - start) > longestLength) {
        longestLength = (end - start);
      }

      while (foundChars[char]) {
        delete foundChars[string[start]];
        start++;
      }

      foundChars[char] = true;
    }
  }

  return longestLength;

};