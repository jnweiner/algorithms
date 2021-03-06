/*
Given a binary tree and a node, find the level order successor of the given node in the tree. The level order successor is the node that appears right after the given node in the level order traversal.
*/

class TreeNode {

  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null; 
  }
};


const find_successor = function(root, key) {
  const queue = [root];
  let keyFound = false;

  while (queue.length) {
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      if (keyFound) {
        return node.value;
      }
      if (node.value === key) {
        keyFound = true;
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  return null;
};