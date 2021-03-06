/*
Given a binary tree and a number ‘S’, find all paths in the tree such that the sum of all the node values of each path equals ‘S’. Please note that the paths can start or end at any node but all paths must follow direction from parent to child (top to bottom).
*/

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};


const count_paths = function(root, S) {

  const recurse = (node, queue, S) => {
    if (!node) {
      return 0;
    }

    let pathSum = 0;
    let pathCount = 0;

    queue.push(node.value);

    for (let i = queue.length - 1; i >= 0; i--) {
      pathSum += queue[i];
      if (pathSum === S) {
        pathCount++;
      }
    }

    pathCount += recurse(node.left, queue, S);
    pathCount += recurse(node.right, queue, S);

    queue.pop();
    return pathCount;
  }

  return recurse(root, [], S);
};