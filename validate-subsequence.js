function isValidSubsequence(array, sequence) {
  let equalNumbersInArray = 0;

  for (const num of array) {
    if (sequence.length === equalNumbersInArray) break;

    if (num === sequence[equalNumbersInArray]) {
      equalNumbersInArray++;
    }
  }

  return equalNumbersInArray === sequence.length;
}
