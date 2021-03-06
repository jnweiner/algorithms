/*
Given a binary tree, populate an array to represent its zigzag level order traversal. You should populate the values of all nodes of the first level from left to right, then right to left for the next level and keep alternating in the same manner for the following levels.
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

  let leftToRight = true;

  while (queue.length) {
    const levelSize = queue.length;
    const levelVals = [];
    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();
      if (leftToRight) {
        levelVals.push(node.value);
      } else {
        levelVals.unshift(node.value);
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    result.push(levelVals);
    leftToRight = !leftToRight;
  }

  return result;
};

