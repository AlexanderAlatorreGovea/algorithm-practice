function nodeDepths(root, depths = 0) {
  if (!root) return 0;

  return (
    depths +
    nodeDepths(root.left, depths + 1) +
    nodeDepths(root.right, depths + 1)
  );
}
