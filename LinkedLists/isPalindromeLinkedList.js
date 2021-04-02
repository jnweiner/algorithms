/**
 * 
 * Given the head of a singly linked list, return true if it is a palindrome.

Example 1:
Input: head = [1,2,2,1]
Output: true

 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    
  const values = [];
  
  let currentNode = head;
  while (currentNode) {
      values.push(currentNode.val);
      currentNode = currentNode.next;
  }
  
  let isPal = true;

  let left = 0;
  let right = values.length - 1;
  while (left < right) {
      if (values[left] !== values[right]) {
          isPal = false;
          break;
      }
      left++;
      right--;
  }
  
  return isPal;
  
};