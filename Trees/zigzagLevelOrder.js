/*
Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

const zigzagLevelOrder = (root) => {
  const nodesByLevel = {
    0: [root]
  };
  let currentLevel = 0;
  const result = [];

  while (nodesByLevel[currentLevel]) {
    let values = [];
    for (let i = 0; i < nodesByLevel[currentLevel].length; i++) {
      const node = nodesByLevel[currentLevel][i];
      values.push(node.val);
      if (node.left || node.right) {
        if (currentLevel % 2 === 0) {
          nodesByLevel[currentLevel + 1] = [node.right || null, node.left || null];
        } else {
          nodesByLevel[currentLevel + 1] = [node.left || null, node.right || null];
        }
      }
    }
    result.push(values);
    currentLevel++;
  }

  return result;
};