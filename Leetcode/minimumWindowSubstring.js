/*
Given two strings s and t, return the minimum window in s which will contain all the characters in t. If there is no such window in s that covers all characters in t, return the empty string "".

Note that If there is such a window, it is guaranteed that there will always be only one unique minimum window in s.

 

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Example 2:

Input: s = "a", t = "a"
Output: "a"
 
*/

const minWindow = (s, t) => {
  const tCounts = {};
  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    if (!tCounts[char]) {
      tCounts[char] = 1;
    } else {
      tCounts[char]++;
    }
  }

  let foundChars = 0;
  let windowStart = 0;
  let windowCounts = {};
  let minWindow = '';

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    // add char at windowEnd to windowCounts
    // check if windowCounts[char] === tCounts[char]
      // if yes, increment foundChars
      // if foundChars === t.length
        // check against minWindow
      // while window is 'desirable'
        // update windowStart
        // remove that char from windowCounts
          // update foundChars accordingly


  }


  return minWindow;

};

