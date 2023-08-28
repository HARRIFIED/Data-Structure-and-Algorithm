//* Challenge: Find the middle of a given linked list

/**
 ** Creates a node
  *Takes in data and a pointer initially set to null
  * Returns data and pointer
 */
const createNode = (data, next = null) => ({ data, next })

/**
 * 
 ** Adds a node to the end of a linked list
 * 
 */
const appendNode = (node, data) => {
    const newNode = createNode(data)
    if (!node) return newNode
    const lastNode = getLastNode(node)
    lastNode.next = newNode
    return node
}

// Return last node in a list
const getLastNode = (node) => {
    let current = node
    while (current.next) {
        current = current.next
    }
    return current
}

/**
 * *Get the node at half count 
 * 
 */

const getMiddleNode = (node) => {
    if (node !== null) {
        let length = getLengthNode(node)
        let current = node
        let middleLength = length / 2
        console.log(length)
        while (parseInt(middleLength) !== 0) {
            current = current.next
            middleLength--
        }
        console.log(current.data)
    }
}


const getLengthNode = (node) => {
    let current = node
    let count = 0
    while (current) {
        count += 1
        current = current.next
    }
    console.log(count)
    return count
}


const display = (node) => {
    let current = node
    while (current) {
        console.log(current.data)
        current = current.next
    }
}

let myList = null

myList = appendNode(myList, 1)
myList = appendNode(myList, 2)
myList = appendNode(myList, 3)
myList = appendNode(myList, 4)
myList = appendNode(myList, 5)

getMiddleNode(myList)


display(myList)