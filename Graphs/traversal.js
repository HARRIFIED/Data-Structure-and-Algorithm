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

function dfsRecursion(graph, start, output) {
    output.push(start);
    for (let curr of graph[start]) {
        dfsRecursion(graph, curr, output)
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
const graph = {
    a: ['b', 'c'],        
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

console.log(dfsRecursion(graph, 'a', []));
console.log(bfs(graph, 'a'));