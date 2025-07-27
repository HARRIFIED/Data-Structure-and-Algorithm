class HashTable {
    constructor (size) {
        this.data = new Array(size);
    }

    //we use hash to generate a random memory space (number) within the size of the data.
    //Example generating 24 out of 50 slot memory 
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value])
        // console.log(this.data)
        return this.data
    }

    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            // For collision sake we loop 
            for (let i = 0; i < currentBucket.length; i++) {
            if (currentBucket[i][0] === key) {
                // console.log(currentBucket[i][1])
                return currentBucket[i][1]
            }
        }
        } else {
            // console.log('undefined')
            return undefined
        }
    }

    has(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return true
                } else {
                    return false
                }
            }
        } else {
            return false
        }
    }

    keys() {
        let result = [];
        if (!this.data.length) {
            return undefined
        }

        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                if (this.data[i].length > 1) {
                    for (let j = 0; j < this.data[i].length; j++) {
                        result.push(this.data[i][j][0][0])
                    }
                }
                result.push(this.data[i][0][0])
            }
        }
        return result;
    }

    delete(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address]
        if (currentBucket) {
            //For collision sake we loop
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    currentBucket.filter((_, index) => index !== i)
                    return true
                } else {
                    return false
                }
            }
        } else {
            return false
        }
    }
}

const myHashTable = new HashTable(50)
myHashTable.set('grapes', 1000)
myHashTable.set('apples', 2)
myHashTable.set('oranges', 10)
myHashTable.set('cherry', 5)
// myHashTable.get('grapes');
// console.log(myHashTable.has('grapes'))
console.log(myHashTable.delete('cherry'))
console.log(myHashTable.keys())
