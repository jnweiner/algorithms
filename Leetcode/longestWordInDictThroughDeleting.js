/*
Given a string and a string dictionary, find the longest string in the dictionary that can be formed by deleting some characters of the given string. If there are more than one possible results, return the longest word with the smallest lexicographical order. If there is no possible result, return the empty string.

Example 1:
Input:
s = "abpcplea", d = ["ale","apple","monkey","plea"]

Output: 
"apple"
Example 2:
Input:
s = "abpcplea", d = ["a","b","c"]

Output: 
"a"
*/

const findLongestWord = (s, d) => {

  const chars = {};

  for (let i = 0; i < s.length; i++) {
    if (chars[s[i]]) {
      chars[s[i]].push(i);
    } else {
      chars[s[i]] = [i];
    }
  }

  let longestWord = '';

  for (let j = 0; j < d.length; j++) {
    const word = d[j];
    let isValid = true;

    let lastLetterIndex = 0;
    for (let k = 0; k < word.length; k++) {
      let letter = word[k];
      if (!chars[letter]) {
        isValid = false;
        break;
      } else {
        const indices = chars[letter];
        let hasValidIndex = false;
        for (let l = 0; l < indices.length; l++) {
          if (indices[l] >= lastLetterIndex) {
            hasValidIndex = true;
          }
        }
        if (hasValidIndex) {
          lastLetterIndex = k;
        } else {
          isValid = false;
          break;
        }
      }
    }
    if (isValid) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
  }

  return longestWord;

};