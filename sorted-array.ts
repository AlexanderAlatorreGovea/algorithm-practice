// o(nlogn) time
// o(n) space

function sortedSquaredArray(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const multipliedOutcome = array[i] * array[i];

    newArray.push(multipliedOutcome);
  }
  return newArray.sort((a, b) => a - b);
}

console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]));

//[-7, -5, -4, 3, 6, 8, 8]
// start                end
// you need to solve in linear time b
// o(n) time | 0(n) space

function sortedSquaredArrayOptimized(array) {
  const sortedSquare = [];
  let smallerIdx = 0;
  let largestIdx = array.length - 1;

  for (let i = array.length - 1; i >= 0; i--) {
    if (Math.abs(array[smallerIdx]) > Math.abs(array[largestIdx])) {
      sortedSquare[i] = array[smallerIdx] * array[smallerIdx];
      smallerIdx++;
    } else {
      sortedSquare[i] = array[largestIdx] * array[largestIdx];
      largestIdx--;
    }
  }

  return sortedSquare;
}

console.log(sortedSquaredArrayOptimized([-7, -5, -4, 3, 6, 8, 8]));
