//Implementing queue using linkedList
class Node {
    constructor(node) {
        this.value = node
        this.next = null
    } 
}

class Queue {
    constructor(value) {
        this.front = {
            value,
            next: null
        };
        this.end = this.front;
        this.length = 1;
    }
    peek() {
        return this.front;
    }
    enqueue(node) {
        const newNode = new Node(node);
        if (this.length === 0) {
            this.front = node;
            this.end = node;
        } else {
            this.end.next = newNode;
            this.end = newNode;
        }
        this.length++;
        return this;
    }
    dequeue() {
        if(!this.front) {
            return null
        }
        if (this.front === this.end) {
            this.end = null
        }
        this.front = this.front.next;
        this.length--;
        return this;
    }
}

const myQueue = new Queue('Ade')
console.log(myQueue.peek())
myQueue.enqueue('Bola')
myQueue.enqueue('Sarah')
myQueue.enqueue('Timothy')
myQueue.dequeue()
console.log(myQueue.peek())
myQueue.dequeue()
console.log(myQueue.peek())
console.log(myQueue)
