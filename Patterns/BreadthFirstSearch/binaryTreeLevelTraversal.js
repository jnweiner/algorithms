/*
Given a binary tree, populate an array to represent its level-by-level traversal. You should populate the values of all nodes of each level from left to right in separate sub-arrays.
*/

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};


const traverse = function(root) {
  const result = [];
  const queue = [root];

  while (queue.length) {
    const levelValues = [];
    // set levelSize at beginning so as we remove items from queue, doesn't mess up for loop
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      // remove item from queue as we enter its value
      const node = queue.shift();
      levelValues.push(node.value);
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    result.push(levelValues);
  }

  return result;
}
