/*
We’re given the pointer/reference to the head of a singly linked list, reverse it
and return the pointer/reference to the head of the reversed linked list.
*/

const reverse = function(head) {
  let previousNode = null;
  let currentNode = head;

  while (currentNode) {
    let nextNode = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = nextNode;
  }

  return previousNode;

};