/**
 *                 2 ------> 0
 *                /\
 *               /  \
 *              /    \
 *             1      3
 */



// Edge List
const graph = [[2, 0], [2, 1], [2, 3], [1, 3]]

//* Adjacent List -- the index is the node and value is the node neighbour
// It can be implemented with an array or linkedlist or objects
//              0     1      2        3
const graph2 = [[2], [2,3], [0,1,3], [1,2]]

//* Adjacent Matrix --- using 0s and 1s to show if node x have a connection to node y
// 0 - no 1 - yes. You could also use weighted value tooo
const graph3 = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0]
]

// or 
const graph4 = {
    0: [0, 0, 1, 0],
    1: [0, 0, 1, 1],
    2: [1, 1, 0, 1],
    3: [0, 1, 1, 0]
}


