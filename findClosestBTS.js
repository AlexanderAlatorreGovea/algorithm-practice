function findClosestValueInBst(tree, target) {
  return findClosestValueInBstHelper(tree, target, Infinity);
}

function findClosestValueInBstHelper(tree, target, closestNode) {
  let node = tree;

  while (node) {
    if (Math.abs(target - closestNode) > Math.abs(target - node.value)) {
      closestNode = node.value;
    }

    if (target > node.value) {
      node = node.left;
    } else if (target < node.value) {
      node = node.right;
    } else {
      break;
    }
  }

  return closestNode;
}
