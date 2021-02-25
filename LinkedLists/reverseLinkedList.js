let reverse = function(head) {
  let prevNode = null;
  let currentNode = head;

  while (currentNode) {
    let nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }
  
  return prevNode;
};