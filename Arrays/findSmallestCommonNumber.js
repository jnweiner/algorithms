/*
In the example below, you are given three positive integer arrays which are
sorted in ascending order.
You have to find the smallest number that is common in all three arrays.
Return -1 if the smallest common number is not found.
*/

const findSmallestCommonNumber = (a, b, c) => {
  let biggest = a[0];
  if (b[0] > biggest) {
    biggest = b[0];
  }
  if (c[0] > biggest) {
    biggest = c[0];
  }

  let aPointer = 0;
  let bPointer = 0;
  let cPointer = 0;

  while (aPointer < a.length && bPointer < b.length && cPointer < c.length) {
    if (a[aPointer] === biggest && b[bPointer] === biggest && c[cPointer] === biggest) {
      return biggest;
    }

    while (a[aPointer] < biggest) {
      aPointer++;
      if (a[aPointer] > biggest) {
        biggest = a[aPointer];
      }
    }
    
    while (b[bPointer] < biggest) {
      bPointer++;
      if (b[bPointer] > biggest) {
        biggest = b[bPointer];
      }
    }

    while (c[cPointer] < biggest) {
      cPointer++;
      if (c[cPointer] > biggest) {
        biggest = c[cPointer];
      }
    }
  }

  return -1;
};