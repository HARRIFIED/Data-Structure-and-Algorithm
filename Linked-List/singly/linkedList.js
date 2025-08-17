class NewNode {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}
class LinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    //Add item to the end of the list
    append(value) {
        const newNode = new NewNode(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new NewNode(value);
        newNode.next = this.head;
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
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.length++
        return this
    }

    remove (index) {
        let currentNode = this.head;
        let count = 0;
        while(count !== index - 1) {
            currentNode = currentNode.next;
            count++;
        }
        const unwantedNode = currentNode.next;
        currentNode.next = unwantedNode.next;
        this.length--;
        return this;
    }
    //12         // 10
    // 10 -> 11 -> 12\temp -> 13 -> null 
    // 11 -> 10
    // 13 -> 12 -> 11 -> 10
    reverse() {
      if (!this.head.next) {
        return this.head
      }
      let first = this.head;
      let second = this.head.next;
      while(second) {
        const temp = second.next;
        second.next = first;
        first = second;
        second = temp
      }
      this.head.next = null;
      this.head = first
    }
}
const myLinkedList = new LinkedList(10)
console.log(myLinkedList.printList())
//[0,5,10,15,20]
myLinkedList.prepend(5)
myLinkedList.prepend(0)
console.log(myLinkedList.printList())
myLinkedList.append(15)
myLinkedList.append(20)
console.log(myLinkedList.printList())
myLinkedList.insert(2, 13)
console.log(myLinkedList.printList())
myLinkedList.insert(3, 17)
console.log(myLinkedList.printList())
myLinkedList.remove(2)
console.log(myLinkedList.printList())
myLinkedList.remove(2)
console.log(myLinkedList.printList())
myLinkedList.reverse()
console.log(myLinkedList.printList())