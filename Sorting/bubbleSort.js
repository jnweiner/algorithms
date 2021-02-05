const bubbleSort = (arr) => {

  let didSwap = false;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      let bigger = arr[i];
      let smaller = arr[i + 1];
      arr[i + 1] = bigger;
      arr[i] = smaller;
      didSwap = true;
    }
  }

  if (!didSwap) {
    return arr;
  } else {
    return bubbleSort(arr);
  }

};