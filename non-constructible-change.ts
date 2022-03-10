// given an array of positive integers represenitng coins
// write a function with the minimun sum of money you cannot create
// if you are given [1, 2, 5] the minimum amount of change you can't create
//is 4. If you are given two coins the minumum amount you can't create is 1

// we add the current value of all the coins and we break when the coin
// is bigger than all the change that has already been added + 1

function nonConstructibleChange(coins) {
  let currentChange = 0;
  coins.sort((a, b) => a - b);

  for (const coin of coins) {
    if (coin > currentChange + 1) {
      //here you break and add one to find the next number that you cannot make
      return currentChange + 1;
    }

    // add all the coins here
    currentChange += coin;
  }

  // this is to check edge cases where it breaks earlier
  return currentChange + 1;
}

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));
// [1, 1, 2, 3, 5, 7, 22]
