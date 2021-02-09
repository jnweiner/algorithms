/*
Given an Iterator class interface with methods: next() and hasNext(), design and implement a PeekingIterator that support the peek() operation -- it essentially peek() at the element that will be returned by the next call to next().

Example:

Assume that the iterator is initialized to the beginning of the list: [1,2,3].

Call next() gets you 1, the first element in the list.
Now you call peek() and it returns 2, the next element. Calling next() after that still return 2. 
You call next() the final time and it returns 3, the last element. 
Calling hasNext() after that should return false.
*/

var PeekingIterator = function(iterator) {
  this.iterator = iterator;
  this.cached = null;
  this.hasPeeked = false;
};

PeekingIterator.prototype.peek = function() {
  if (!this.hasPeeked) {
    this.cached = this.iterator.next();
    this.hasPeeked = true;
  } 
  return this.cached;
};

PeekingIterator.prototype.next = function() {
  if (this.hasPeeked) {
    this.hasPeeked = false;
    return this.cached;
  }
  return this.iterator.next();
};

PeekingIterator.prototype.hasNext = function() {
  if (this.hasPeeked) {
    return true;
  } else {
    return this.iterator.hasNext();
  }
};