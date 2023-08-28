//* Double linked list

/**
 * *  Creates a double linked list
 * Takes in 3 values prev and next pointers and the value or data
 * Returns an object containing prev, data and value
 */
const createNode = (data, prev = null, next = null) => ({ prev, data, next })

//Function adds a node to the end of a linked list
const appendNode = (node, data) => {
    const newNode = createNode(data)
    if (!node.head) return { head: newNode, tail: newNode }

    newNode.prev = node.tail
    node.tail.next = newNode
    return { ...node, tail: newNode }
}


//prints the double linked list
const display = (node) => {
    let current = node
    while (current) {
        console.log(current.data)
        current = current.next

    }
}

//Print reverse of the list
const revDisplay = (node) => {
    let current = node
    while (current) {
        console.log(current.data)
        current = current.prev

    }
}


let myList = { head: null, tail: null }
myList = appendNode(myList, 1)
myList = appendNode(myList, 2)

display(myList.head)
revDisplay(myList.tail)