/*
Given a binary tree and a number sequence, find if the sequence is present as a root-to-leaf path in the given tree.
*/

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};

const find_path = function(root, sequence) {

  const recurse = (node, sequence, index) => {
    if (!node) {
      return false;
    }
    if (node.value !== sequence[index]) {
      return false;
    } else {
      if (index === sequence.length - 1 && !node.left && !node.right) {
        return true;
      } else {
        return recurse(node.left, sequence, index + 1) || recurse(node.right, sequence, index + 1);
      }
    }
  }
  return recurse(root, sequence, 0);

};
