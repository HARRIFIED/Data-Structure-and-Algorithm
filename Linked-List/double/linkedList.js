class NewNode {
    constructor(value) {
        this.value = value;
        this.next = null
        this.prev = null
    }
}
class LinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null,
            prev: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    //Add item to the end of the list
    append(value) {
        const newNode = new NewNode(value);
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
        return this;
    }
 // 9 -> <-10
    prepend(value) {
        const newNode = new NewNode(value);
        newNode.next = this.head;
        this.head.prev = newNode
        this.head = newNode;
        this.length++;
        return this;
    }

    printList() {
        const arr = [];
        let currentNode = this.head;
        while(currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr
    }
               
    insert(index, value) {
        const newNode = new NewNode(value)
        let currentNode = this.head;
        let count = 0;
        //So we traverse until we get to the count before the given index
        while(count !== index - 1) {
            currentNode = currentNode.next;
            count++
        }
        let nextNode = currentNode.next
        newNode.next = nextNode;
        nextNode.prev = newNode;
        newNode.prev = currentNode
        currentNode.next = newNode;
        this.length++
        return this
    }
            // <- 12 ->
    //9 -> <- 10 ->  <- 15
    remove (index) {
        let currentNode = this.head;
        let count = 0;
        while(count !== index - 1) {
            currentNode = currentNode.next;
            count++;
        }
        const unwantedNode = currentNode.next;
        currentNode.next = unwantedNode.next;
        (unwantedNode.next).prev = currentNode
        this.length--;
        return this;
    }
}
const myLinkedList = new LinkedList(10)
console.log(myLinkedList)
myLinkedList.append(15)
console.log(myLinkedList)
// myLinkedList.append(20)
// console.log(myLinkedList)
myLinkedList.prepend(9)
console.log(myLinkedList)
myLinkedList.insert(2, 12)
console.log(myLinkedList)
console.log(myLinkedList.printList())
myLinkedList.remove(2)
console.log(myLinkedList)
console.log(myLinkedList.printList())
