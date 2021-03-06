/*
Given a binary tree, connect each node with its level order successor. The last node of each level should point to a null node.
*/

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null;
  }
}

const connect_level_order_siblings = function(root) {
  const queue = [root];
  let prevNode = null;

  while (queue.length) {
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      if (prevNode) {
        prevNode.next = node;
      }
      if (node.left) {
        queue.push(node.left);
      } 
      if (node.right) {
        queue.push(node.right);
      }
      prevNode = node;
    }
  }
};
