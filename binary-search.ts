// Time = 0(log(N)), Space 0(log(N))
// worst case scenary: 0(n) | 0(n) space
// worst case scenary 0(N), this is the worst case because it only has only branch
// worst case on space is 0(N)
function findClosestValueInBst(tree, target) {
  // Write your code here.
  return findClosestValueInBstHelper(tree, target, tree.value);
}

function findClosestValueInBstHelper(tree, target, closestValue) {
  let currentNode = tree;

  while (currentNode) {
    if (
      Math.abs(target - closestValue) > Math.abs(target - currentNode.value)
    ) {
      closestValue = currentNode.value;
    }

    if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else {
      break;
    }
  }

  return closestValue;
}

// This is the class of the input tree. Do not edit.
class BST {
  value: any;
  left: any;
  right: any;

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new BST(10);
root.left = new BST(5);
root.left.left = new BST(2);
root.left.left.left = new BST(1);
root.left.right = new BST(5);
root.right = new BST(15);
root.right.left = new BST(13);
root.right.left.right = new BST(14);
root.right.right = new BST(22);
console.log(root)
console.log(findClosestValueInBst(root, 12));
