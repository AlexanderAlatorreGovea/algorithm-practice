// the distance between a node in a Binary Tree and the root
//is called node-dephts
//write a funciton that takes in a binary tree and returns the sum of its
//node depths
//0(n) | 0(h)

function nodeDepths(root, depths = 0) {
  if (!root) return 0;

  return (
    depths +
    nodeDepths(root.left, depths + 1) +
    nodeDepths(root.right, depths + 1)
  );
}

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

const root = new BST(1);
root.left = new BST(2);
root.left.left = new BST(4);
root.left.left.left = new BST(8);
root.left.left.right = new BST(9);
root.left.right = new BST(5);
root.right = new BST(3);
root.right.left = new BST(6);
root.right.right = new BST(7);

console.log(nodeDepths(root));
