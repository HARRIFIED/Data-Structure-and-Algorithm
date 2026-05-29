/**
 * RandomizedCollection is a data structure that contains a collection of numbers, possibly duplicates (i.e., a multiset). It should support inserting and removing specific elements and also reporting a random element.

    Implement the RandomizedCollection class:

    RandomizedCollection() Initializes the empty RandomizedCollection object.
    bool insert(int val) Inserts an item val into the multiset, even if the item is already present. Returns true if the item is not present, false otherwise.
    bool remove(int val) Removes an item val from the multiset if present. Returns true if the item is present, false otherwise. Note that if val has multiple occurrences in the multiset, we only remove one of them.
    int getRandom() Returns a random element from the current multiset of elements. The probability of each element being returned is linearly related to the number of the same values the multiset contains.
    You must implement the functions of the class such that each function works on average O(1) time complexity.

    Note: The test cases are generated such that getRandom will only be called if there is at least one item in the RandomizedCollection.

    Example 1:

    Input
    ["RandomizedCollection", "insert", "insert", "insert", "getRandom", "remove", "getRandom"]
    [[], [1], [1], [2], [], [1], []]
    Output
    [null, true, false, true, 2, true, 1]
 */

class RandomizedCollection {

    constructor() {
        this.nums = [];
        this.indexMap = new Map();
    }
    // nums = [1,2,1,3]  indexMap = { 1:{0,2}, 2:{1}, 3:{3} }
    insert(val) {
        if (this.indexMap.has(val)) {
            let indexSet = this.indexMap.get(val);
            indexSet.add(this.nums.length);
            this.nums.push(val);
            return false;
        } else {
            let indexSet = new Set();
            indexSet.add(this.nums.length);
            this.indexMap.set(val, indexSet);
            this.nums.push(val);
            return true;
        } 
    }
    
    remove(val) {
        if (!this.indexMap.has(val)) {
            return false;
        }

        const indexSetToRemoveFrom = this.indexMap.get(val);
        const indexToRemove = indexSetToRemoveFrom.values().next().value;
        indexSetToRemoveFrom.delete(indexToRemove);
        const lastIndex = this.nums.length - 1;


        //check if the last element is not same as index to remove
        if (indexToRemove !== lastIndex) {
            this.nums[indexToRemove] = this.nums[lastIndex];
            let lastElementToMove = this.indexMap.get(this.nums[lastIndex]);
            lastElementToMove.delete(lastIndex);
            lastElementToMove.add(indexToRemove);
        }
        this.nums.pop();
        // check if the size of the set is zero if true delete from the map
        if(valToRemoveInMap.size == 0) {
            this.indexMap.delete(val);
        }
        return true;
    }

    getRandom() {
        const randomIndex = Math.floor(Math.random() * this.nums.length);
        return this.nums[randomIndex];
    }
}