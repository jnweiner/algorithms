/*
Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

Example 1:

Input: [-2, -1, 0, 2, 3]
Output: [0, 1, 4, 4, 9]
*/

const make_squares = function(arr) {
  squares = [];
  
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    if (arr[right] ** 2 > arr[left] ** 2) {
      squares.unshift(arr[right] ** 2);
      right--; 
    } else {
      squares.unshift(arr[left] ** 2);
      left++;
    }
  }

  return squares;
};