/*
Problem Statement 
Given an array of characters where each character represents a fruit tree, you are given two baskets and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.
You can start with any tree, but once you have started you can’t skip a tree. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.
Write a function to return the maximum number of fruits in both the baskets.
Example 1:
Input: Fruit=['A', 'B', 'C', 'A', 'C']
Output: 3
Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']
Example 2:
Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
Output: 5
Explanation: We can put 3 'B' in one basket and two 'C' in the other basket. 
This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']
*/

// I array of chars where each char represents fruit 
// O max num of fruits in both baskets
// C only 2 baskets
// E empty input?

const fruitsInBaskets = (arr) => {
  const fruitsFound = {};
  let totalFruits = 0;
  let maxFruits = 0;
  let start = 0;

  for (let end = 0; end < arr.length; end++) {
    if (!fruitsFound[arr[end]]) {
      fruitsFound[arr[end]] = 1
    } else {
      fruitsFound[arr[end]]++;
    }
    totalFruits++;

    if (Object.keys(fruitsFound).length === 2) {
      if (totalFruits > maxFruits) {
        maxFruits = totalFruits;
      }
    } else {
      while (Object.keys(fruitsFound).length > 2) {
        fruitsFound[arr[start]]--;
        totalFruits--;
        if (fruitsFound[arr[start]] === 0) {
          delete fruitsFound[arr[start]];
        }
        start++;
      }
    }
  }

  return maxFruits;

};
