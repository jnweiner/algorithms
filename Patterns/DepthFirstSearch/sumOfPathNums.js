/*
Given a binary tree where each node can only have a digit (0-9) value, each root-to-leaf path will represent a number. Find the total sum of all the numbers represented by all paths.
*/

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};


const find_sum_of_path_numbers = function(root) {
  let totalSum = 0;

  const recurse = (node, pathSum) => {
    if (!node) {
      return;
    }

    pathSum += node.value;

    if (!node.left && !node.right) {
      totalSum += pathSum;
      return;
    } else {
      recurse(node.left, pathSum * 10);
      recurse(node.right, pathSum * 10);
    }

  }
  recurse(root, 0);

  return totalSum;
};