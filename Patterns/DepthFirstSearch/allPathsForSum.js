/*
Given a binary tree and a number ‘S’, find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.
*/

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};


const find_paths = function(root, sum) {
  const allPaths = [];

  const recurse = (node, path, sum) => {
    if (!node) {
      return;
    }

    path.push(node.value);

    if (node.value === sum && !node.left && !node.right) {
      // push a copy, otherwise will mutate path when we pop 
      allPaths.push(path.slice());
    } else {
      recurse(node.left, path, sum - node.value);
      recurse(node.right, path, sum - node.value);
    }

    // remove value as we recurse back up the stack
    path.pop();

  }
  
  recurse(root, [], sum);

  return allPaths;
};