// o(nlogn) time
// o(n) space

function sortedSquaredArray(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const multipliedOutcome = array[i] * array[i];

    newArray.push(multipliedOutcome);
  }
  return newArray.sort((a, b) => a -b);
}

console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]));
