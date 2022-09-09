function branchSums(root) {
  const nodes = [];

  getBranchSum(root, nodes, 0);

  return nodes;
}

function getBranchSum(root, nodes, runningSum) {
  if (!root) return;

  let sum = root.value + runningSum;

  if (!root.left && !root.right) {
    nodes.push(sum);
  }

  getBranchSum(root.left, nodes, sum);
  getBranchSum(root.right, nodes, sum);
}

