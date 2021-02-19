// initialize empty array
// initialize biggest as num at index 0
// initialize biggest num index at 0
// initialize start at 0, end at w - 1

// create function that iterates and determines biggest num from x to y
// iterate from start to end - conditional
  // determine biggest number

// while end less than length of array

  // slide the window
    // start++, end++

  // check if biggest number index is now out of bounds
    // if it is, we need to do iteration again - invoke biggestNum function
    // if not, we just need to compare num at end with biggest number

  // push biggest number into array

// return output

const findBiggest = (arr, x, y) => {
  let biggest = arr[x];
  let biggestIndex = x;

  for (let i = x; i <= y; i++) {
    if (arr[i] > biggest) {
      biggest = arr[i];
      biggestIndex = i;
    }
  }

  return [biggest, biggestIndex];
};

const findMaxSlidingWindow = (arr, w) => {
  const output = [];

  let start = 0;
  let end = w - 1;

  let [biggest, biggestIndex] = findBiggest(arr, start, end);

  output.push(biggest);

  while (end < arr.length - 1) {
    start++;
    end++;

    if (biggestIndex < start) {
      [biggest, biggestIndex] = findBiggest(arr, start, end);
    } else {
      if (arr[end] > biggest) {
        biggest = arr[end];
        biggestIndex = end;
      }
    }

    output.push(biggest);
  }

  return output;
};