function sortedSquaredArray(array) {
  const newSquaredArray = [];

  for (const num of array) {
    newSquaredArray.push(num * num);
  }

  return newSquaredArray.sort((a, b) => a - b);
}
