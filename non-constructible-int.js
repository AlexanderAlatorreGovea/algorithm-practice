function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b);
  // [1, 2, 3, 4, 20]
  let sum = 0;

  for (let coin of coins) {
    if (sum + 1 < coin) {
      return sum + 1;
    }

    sum += coin;
  }

  return currentChange + 1;
}
