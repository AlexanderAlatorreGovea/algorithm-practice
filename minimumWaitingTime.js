// [1, 2, 2, 3, 6]

function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b);

  let minimumWaitingTime = 0;
  for (let i = 0; i < queries.length; i++) {
    const query = queries[i];
    const queriesLeft = queries.length - (i + 1);

    minimumWaitingTime += queries + queriesLeft;
  }

  return minimumWaitingTime;
}
