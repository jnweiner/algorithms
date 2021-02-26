/*
We are given a linked list of integers and we have to remove all the duplicate nodes from it by keeping only the first occurrence of each duplicate. 
*/

const removeDuplicates = (head) => {
  let prevNode = null;
  let currentNode = head;

  let values = {};

  while (currentNode) {
    if (values[currentNode.data]) {
      prevNode.next = currentNode.next;
    } else {
      values[currentNode.data] = true;
      prevNode = currentNode;
    }
    currentNode = currentNode.next;
  }

  return head;

};