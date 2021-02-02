// Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

// I binary string
// O number of 1 bits (int)
// C input will be binary string of length 32
// E

const count1Bits = (n) => {
  const binaryString = n.toString(2);
  const bits = binaryString.split('').filter(char => char === '1');
  return bits.length;
};