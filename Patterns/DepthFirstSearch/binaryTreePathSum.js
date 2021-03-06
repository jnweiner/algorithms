/*
Given a binary tree and a number ‘S’, find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals ‘S’.
*/

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};


const has_path = function(root, sum) {
  if (!root) {
    return false;
  }

  if (root.value === sum && !root.left && !root.right) {
    return true;
  }

  return has_path(root.left, sum - root.value) || has_path(root.right, sum - root.value);
  
};