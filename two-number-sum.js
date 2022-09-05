// const array = [3, 5, -4, 8, 11, 1, -1, 6]

function twoNumberSum(array, targetSum) {
  const obj = {};

  for (let num of array) {
    const potentialMatch = targetSum - num;

    if (potentialMatch in obj) {
      return [num, potentialMatch];
    } else {
      obj[num] = true;
    }
  }

  return [];
}
