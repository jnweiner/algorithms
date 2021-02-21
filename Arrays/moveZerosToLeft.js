/*
Given an integer array, move all elements that are 0 to the left while maintaining the order of other elements in the array. The array has to be modified in-place.
*/

const moveZerosToLeft = (arr) => {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (true) {
    while (arr[leftPointer] === 0) {
      leftPointer++;
    }
    while (arr[rightPointer] !== 0) {
      rightPointer--;
    }
    if (leftPointer >= rightPointer) {
      break;
    }
    arr.splice(leftPointer, 0, 0);
    arr.splice(rightPointer + 1, 1);
  }

  return arr;
};

const test = [1, 10, 20, 0, 59, 63, 0, 88, 0];