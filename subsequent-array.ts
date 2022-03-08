// O(n) time | O(1) space - where n is the length of the array
// Valid subquence between two arrays

function isValidSubsequence(array, sequence) {
  let arrayIndx = 0;
  let sequenceIdx = 0;

  while (arrayIndx < array.length && sequenceIdx < sequence.length) {
    if (array[arrayIndx] === sequence[sequenceIdx]) {
      sequenceIdx++;
    }
    arrayIndx++;
  }

  return sequenceIdx === sequence.length;
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));

// with foorLoop
// O(n) time | O(1) space - where n is the length of the array

function forisValidSubsequence(array, sequence) {
  let sequenceIdx = 0;

  for (const value of array) {
    if (sequenceIdx === sequence.length) break;

    if (sequence[sequenceIdx] === value) sequenceIdx++;
  }

  return sequenceIdx === sequence.length;
}

console.log(
  forisValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])
);
