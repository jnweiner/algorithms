/*
Given a binary tree, populate an array to represent the averages of all of its levels.
*/

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};

const find_level_averages = function(root) {
  const result = [];
  const queue = [root];

  while (queue.length) {
    let levelTotal = 0;
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      levelTotal += node.value;
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    result.push(levelTotal/levelSize);
  }

  return result;
};
