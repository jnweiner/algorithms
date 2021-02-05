/*
Implement the MapSum class:

MapSum() Initializes the MapSum object.
void insert(String key, int val) Inserts the key-val pair into the map. If the key already existed, the original key-value pair will be overridden to the new one.
int sum(string prefix) Returns the sum of all the pairs' value whose key starts with the prefix.
 

Example 1:

Input
["MapSum", "insert", "sum", "insert", "sum"]
[[], ["apple", 3], ["ap"], ["app", 2], ["ap"]]
Output
[null, null, 3, null, 5]

Explanation
MapSum mapSum = new MapSum();
mapSum.insert("apple", 3);  
mapSum.sum("ap");           // return 3 (apple = 3)
mapSum.insert("app", 2);    
mapSum.sum("ap");           // return 5 (apple + app = 3 + 2 = 5)
*/

const Node = function(char) {
  this.char = char;
  this.children = {};
  this.val = null;
};

var MapSum = function() {
  this.root = new Node('');
};

MapSum.prototype.insert = function(key, val) {
  let currentNode = this.root;
  for (let i = 0; i < key.length; i++) {
    let char = key[i];
    if (!currentNode.children[char]) {
      let newNode = new Node(char);
      currentNode.children[char] = newNode;
    }
    currentNode = currentNode.children[char] || newNode;
  }
  currentNode.val = val;
};

MapSum.prototype.sum = function(prefix) {
  let counter = 0;

  let currentNode = this.root;

  for (let i = 0; i < prefix.length; i++) {
    let prefixChar = prefix[i];
    if (!currentNode.children[prefixChar]) {
      return counter;
    }
    currentNode = currentNode.children[prefixChar];
  }

  let countValsOnBranch = (node) => {
    if (node.val) {
      counter += node.val;
    }
    
    for (let key in node.children) {
      countValsOnBranch(node.children[key]);
    }
  };

  countValsOnBranch(currentNode);

  return counter;
};