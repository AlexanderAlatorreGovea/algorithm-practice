function findClosestBST(tree, target) {
  return findClosestBSTHelper(tree, target, tree.value);
}

// function findClosestBSTHelper(tree, target, closestValue) {
//   let currentNode = tree;

//   while (currentNode) {
//     if (
//       Math.abs(target - closestValue) > Math.abs(target - currentNode.value)
//     ) {
//       closestValue = currentNode.value;
//     }

//     if (target < currentNode.value) {
//       currentNode = currentNode.left;
//     } else if (target > currentNode.value) {
//       currentNode = currentNode.right;
//     } else {
//       break;
//     }
//   }

//   return closestValue;
// }

function closestValueHelper(tree, target, closestValue) {
  let currentNode = tree;

  while (currentNode) {
    if (
      Math.abs(target - closestValue) > Math.abs(target - currentNode.value)
    ) {
      closestValue = currentNode.value;
    }

    if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else {
      break;
    }
  }

  return closestValue;
}
