/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/
  
const rockPaperScissors = (numRounds) => {

  const possibleSequences = [];

  const options = ['R', 'P', 'S'];

  const createSequence = (sequence) => {
    if (sequence.length === numRounds) {
      possibleSequences.push(sequence);
    } else {
      options.forEach(option => {
        createSequence(sequence + option);
      });
    }
  };

  createSequence('');

  return possibleSequences;
};