/*
Implement a trie with insert, search, and startsWith methods.

Example:

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");   
trie.search("app");     // returns true
Note:

You may assume that all inputs are consist of lowercase letters a-z.
All inputs are guaranteed to be non-empty strings.
*/

const Node = function(char) {
  this.char = char;
  this.isEndOfWord = false;
  this.children = {};
};

const Trie = function() {
  this.root = new Node('');

};

Trie.prototype.insert = function(word) {
  let currentNode = this.root;
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    let newNode = new Node(char);
    if (!currentNode.children[char]) {
       currentNode.children[char] = newNode;
    }
    currentNode = currentNode.children[char] || newNode;
  }
  currentNode.isEndOfWord = true;
};

Trie.prototype.search = function(word) {
  let currentNode = this.root;
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (currentNode.children[char]) {
      currentNode = currentNode.children[char];
    } else {
      return false;
    }
  }
  return currentNode.isEndOfWord;
};

Trie.prototype.startsWith = function(prefix) {
  let currentNode = this.root;
  for (let i = 0; i < prefix.length; i++) {
    let char = prefix[i];
    if (currentNode.children[char]) {
      currentNode = currentNode.children[char];
    } else {
      return false;
    }
  }
  return true;
};
