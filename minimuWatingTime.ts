// 0 (n log n) because of storing
// positive integers
// The waiting time of the
// 1, 2 ,2, 3, 6
// 0, 1, 3, 5, 8
// 0, 1, 1 + 2, 1 + 2 + 2, 1 + 2 + 2 + 3
const minimumWaitingTime = (queries) => {
  queries.sort((a, b) => a - b);

  let waitingTime = 0;
  for (let idx = 0; idx < queries.length; idx++) {
    const duration = queries[idx];
    const queriesLeft = queries.length - (idx + 1);

    waitingTime += duration * queriesLeft;
  }
  
  return waitingTime;
};

console.log(minimumWaitingTime([5, 1, 4]));
