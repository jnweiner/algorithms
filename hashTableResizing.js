/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

const HashTable = function() {
  this.storage = [];
  this.storageLimit = 4;
  this.itemsStored = 0;

  // create empty buckets
  for (let i = 0; i < this.storageLimit; i++) {
    this.storage.push([]);
  }
};

HashTable.prototype.insert = function(key, value) {
  const bucketIndex = getIndexBelowMaxForKey(key, this.storageLimit);

  const bucket = this.storage[bucketIndex];

  // determine if key already exists
  // if it does, replace the existing value with the new value
  let keyExists = false;
  bucket.forEach(tuple => {
    if (tuple[0] === key) {
      keyExists = true;
      tuple[1] = value;
    }
  });

  if (!keyExists) {
    bucket.push([key, value]); 
    this.itemsStored++;
    if (this.itemsStored > this.storageLimit * 0.75) {
      this.resize(this.storageLimit * 2);
    }
  }
  
};

HashTable.prototype.retrieve = function(key) {
  const bucketIndex = getIndexBelowMaxForKey(key, this.storageLimit);
  const bucket = this.storage[bucketIndex];
  let retrieved = null;

  bucket.forEach(tuple => {
    if (tuple[0] === key) {
      retrieved = tuple[1];
    }
  });

  return retrieved;

};

HashTable.prototype.remove = function(key) {
  const bucketIndex = getIndexBelowMaxForKey(key, this.storageLimit);
  const bucket = this.storage[bucketIndex];

  let indexToRemove = null;

  bucket.forEach((tuple, i) => {
    if (tuple[0] === key) {
      indexToRemove = i;
    }
  });

  if (indexToRemove !== undefined) {
    bucket.splice(indexToRemove, 1);
    this.itemsStored--;
    if (this.itemsStored < this.storageLimit * 0.25) {
      this.resize(this.storageLimit / 2);
    }
  }

};

HashTable.prototype.resize = function(newLimit) {
  const oldStorage = this.storage;
  this.storageLimit = newLimit;
  this.storage = [];
  this.itemsStored = 0;

  // create new empty buckets
  for (let j = 0; j < this.storageLimit; j++) {
    this.storage.push([]);
  }

  // repopulate keys/values into new storage
  oldStorage.forEach(bucket => {
    bucket.forEach(tuple => {
      this.insert(tuple[0], tuple[1]);
    });
  });

};