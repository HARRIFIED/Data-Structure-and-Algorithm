class MyArray {
    constructor () {
        this.length  = 0
        this.data = {}
    }

    //O(1)
    push (item) {
        this.data[this.length] = item;
        this.length++
        return this.length
    }

    //O(n)
    delete(index) {
        // Go to the index of the element you want to delete
        for (let i = index; i < this.length - 1; i++) {
            // We assign the postion of the element to the element next to it
            this.data[i] = this.data[i+1]
        }
        //delete the last element
        delete this.data[this.length - 1]
        // Then decrement the length
        this.length--
    }
}

const newArray = new MyArray();
newArray.push(1)
newArray.push(2)
newArray.push(3)
newArray.push(4)
newArray.push(5)
newArray.push(6)
newArray.delete(3)
console.log(newArray)

console.log(reverse("Hello"))