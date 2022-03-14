// write a function that takes in a binary tree and returns a list
// of its branch sums ordered from leftmost branch sum to rightmost branch sum.

class BinaryST {
  value: any;
  left: any;
  right: any;

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  // Write your code here.]
  const sums = [];

  calculateBranchSums(root, 0, sums);

  return sums;
}

function calculateBranchSums(root, runningSum, sums) {
  if (!root) return;

  const newRunningSum = runningSum + root.value;
  if (!root.left && !root.right) return sums.push(newRunningSum);

  calculateBranchSums(root.left, newRunningSum, sums);
  calculateBranchSums(root.right, newRunningSum, sums);
}
