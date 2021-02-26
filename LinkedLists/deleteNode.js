/*
We are given the head of a linked list and a key. We have to delete the node that contains this given key. 
*/

const deleteNode = (head, key) => {

  if (head.data === key) {
    head = head.next;
  }

  let currentNode = head;

  while (currentNode && currentNode.next) {
    if (currentNode.next.data === key) {
      currentNode.next = currentNode.next.next;
    }

    currentNode = currentNode.next;

  }
  
  return head;
}