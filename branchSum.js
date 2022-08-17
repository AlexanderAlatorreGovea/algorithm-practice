function branchSums(root) {
  const sums = [];

  calculateBranchSums(sums, 0, root);

  return sums;
}

function calculateBranchSums(sums, runningSum, root) {
  if (!root) return;

  const currentBranchSum = root.value + runningSum;

  if (!root.left && !root.right) {
    return sums.push(currentBranchSum);
  }

  calculateBranchSums(sums, root, root.left);
  calculateBranchSums(sums, root, root.right);
}

function nodeDepths(root, depths = 0) {
  if (!root) return 0;

  return (
    depths +
    nodeDepths(root.left, depths + 1) +
    nodeDepths(root.right, depths + 1)
  );
}

//selector (div)
//ruleset is everything from div downward or series of declarations
// div { 
//     // declaration = property + value
//     //property    //value
//     height:        300
// }