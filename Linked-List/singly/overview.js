//* Singly Linked list 

const createNode = (data, next = null) => ({ data, next })

//*Add node at the beginning if the node
const appendNode = (node, data) => { //O(n) time complexity
    const newNode = createNode(data)
    if (!node) return newNode

    // if no list we want to add to the list
    // We need to get the last node in the list
    const lastNode = getLastNode(node)
    lastNode.next = newNode
    return node
}

//* Remove node at the end of a linked list
const popNode = (node) => {  //O(n) time complexity
    if (!node) return null
    if (!node.next) return null

    const secondLastNode = getSecondLastNode(node)
    secondLastNode.next = null
    return node
}

//* Add node to the beginning of a linked list
const pushFront = (head, data) => {    //O(1) time complexity
    const newNode = createNode(data, head)
    return newNode

}

//* Remove node at the beginning of a linked list

const popFront = (head) => {
    if (!head) return null;
    const newHead = head.next;
    head.next = null; // Disconnect the removed node
    return newHead;

}


const getSecondLastNode = (node) => {
    let current = node
    let prev = null
    while (current.next) {
        prev = current
        current = current.next
    }
    return prev
}

const getLastNode = (node) => {
    let current = node
    while (current.next) {
        current = current.next
    }
    console.log(current.data)
    return current
}

const display = (list) => {
    let current = list
    let count = 0
    while (current) {
        console.log(current.data)
        current = current.next
        count += 1
    }
    console.log(count)
}

let myList = null
myList = appendNode(myList, 1)
myList = appendNode(myList, 8)
myList = appendNode(myList, 0)
myList = appendNode(myList, 15)
myList = appendNode(myList, 18)
myList = appendNode(myList, 12)
myList = appendNode(myList, 13)
myList = popNode(myList)
myList = pushFront(myList, 2)
myList = popFront(myList)

// myList = popNode(myList)

display(myList)