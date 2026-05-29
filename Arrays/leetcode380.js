/**
 * Implement the RandomizedSet class:

    RandomizedSet() Initializes the RandomizedSet object.
    bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
    bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
    int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
    You must implement the functions of the class such that each function works in average O(1) time complexity.

    Example 1:
    Input
    ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
    [[], [1], [2], [2], [], [1], [2], []]
    Output
    [null, true, false, true, 2, true, false, 2]
 */

class RandomizedSet {
    constructor() {
        this.indexMap = new Map();
        this.nums = [];
    }
    
    //nums = [1,2]  indexMap = {1:0, 2:1}
    insert(val) {
        if (this.indexMap.has(val)) {
            return false;
        }

        this.indexMap.set(val, this.nums.length);
        this.nums.push(val);
        return true;
    }

    remove(val) {
        if (!this.indexMap.has(val)) {
            return false;
        }

        const indexToRemove = this.indexMap.get(val);
        const lastElement = this.nums[this.nums.length - 1];
        
        //swap position of val to remove and last element in the array then pop it
        // also update the value of the last element in the set to indexToRemove
        this.nums[indexToRemove] = lastElement;
        this.indexMap.set(lastElement, indexToRemove);
        this.indexMap.delete(val);
        this.nums.pop();
        return true;
    }

    getRandom() {
        const randomIndex = Math.floor(Math.random() * this.nums.length);
        return this.nums[randomIndex];
    }
}