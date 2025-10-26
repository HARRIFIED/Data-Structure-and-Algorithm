function dfs(graph, start) {
    const stack = [start];
    const output = [];

    while (stack.length > 0) {
        const currNode = stack.pop();
        output.push(currNode)
        for (let curr of graph[currNode]) {
            stack.push(curr);
        }
    }
    return output;
}

function dfsRecursion(graph, start, output, visited) {
    output.push(start);
    visited.add(start)
    for (let curr of graph[start]) {
        if (!visited.has(curr)) {
            dfsRecursion(graph, curr, output)
        }
    }
    return output;
}

function bfs(graph, start) {
    const queue = [start];
    const output = [];
    while (queue.length > 0) {
        const currNode = queue.shift();
        output.push(currNode);
        for (let curr of graph[currNode]) {
            queue.push(curr);
        }
    }
    return output;
}

/**
 *   a -- b -- d
 *   |         |
 *   |         f
 *   c -- e
 */
// const graph = {
//     a: ['b', 'c'],        
//     b: ['d'],
//     c: ['e'],
//     d: ['f'],
//     e: [],
//     f: []
// }

const graph = { 0: [ 1, 2 ], 1: [ 0, 2 ], 2: [ 1, 0 ] }

console.log(dfsRecursion(graph, 1, [], new Set()));
console.log(bfs(graph, 1));