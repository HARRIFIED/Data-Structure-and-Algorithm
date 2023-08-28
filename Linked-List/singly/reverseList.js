//* Reverse a Linked List

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


/* Function to reverse the linked list */
function reverseDisplay(node) {
    // Initialize variables
    var prev = null;        // Previous node (starts as null since there's no node before the first one)
    var current = node;     // Current node, starting with the input 'node'
    var next = null;        // Next node (will be used to temporarily store the next node in the original list)

    // Loop through the linked list
    while (current != null) {   // Continue until the current node becomes null (reached the end of the list)
        next = current.next;    // Store the next node of the current node before changing the 'next' pointer

        current.next = prev;    // Change the 'next' pointer of the current node to point to the previous node
        prev = current;         // Move 'prev' to the current node
        current = next;         // Move 'current' to the originally stored next node
    }

    // After the loop, the 'prev' variable will point to the new head (last node of the original list)
    node = prev;

    // Return the new head of the reversed linked list
    return node;
}


const display = (node) => {
    let current = node
    while (current) {
        console.log("s", current.data)
        current = current.data
    }
}

myList = null
myList = appendNode(myList, 1)
myList = appendNode(myList, 2)
myList = appendNode(myList, 3)
myList = appendNode(myList, 4)

let reverseList = reverseDisplay(myList)
display(reverseList)