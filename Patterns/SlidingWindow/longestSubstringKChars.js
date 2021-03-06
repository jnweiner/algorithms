/*
Given a string, find the length of the longest substring in it with no more than K distinct characters.

Example 1:

Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".
*/

const longest_substring_with_k_distinct = function(str, k) {
  let longestLength = 0;
  let start = 0;
  let chars = {};

  for (let end = 0; end < str.length; end++) {
    if (!chars[str[end]]) {
      chars[str[end]] = 1;
    } else {
      chars[str[end]]++;
    }
    if (Object.keys(chars).length <= k) {
      if (end - start + 1 > longestLength) {
        longestLength = end - start + 1;
      }
    } else {
      while (Object.keys(chars).length > k) {
        chars[str[start]]--;
        if (chars[str[start]] === 0) {
          delete chars[str[start]];
        }
        start++;
      }
    }
  }

  return longestLength;
};