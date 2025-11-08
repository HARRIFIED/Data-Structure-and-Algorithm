/**
 * 
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
function largestComponent(n, edges) {
    let largest = 0;
    let visited = new Set();
    // const graph = [[8, 1, 5], [0], [0, 8], [0, 5], [3, 4], [2, 4], [3, 2]]
    const graph = buildGraph(edges, n)
    console.log("g", graph)
    for (let i = 0; i< n; i++) {
        if (!visited.has(i)) {
            const nodes = dfs(graph, i, visited);
            largest = Math.max(largest, nodes);
        }
    }

    return largest;
}

function dfs(graph, start, visited) {
    let node = 0;
    const stack = [start];

    while (stack.length > 0) {
        const currNode = stack.pop();
        if (!visited.has(currNode)) {
            visited.add(currNode);
            node++;
            for (let curr of graph[currNode]) {
                if (!visited.has(curr)) {
                    stack.push(curr);
                }
            }
        }
    }
    return node;
}


function buildGraph(edges, n) {
    const graph = Array.from({length: n}, () => []);

    for (let [a, b] of edges) {
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}
console.log(largestComponent(6, [[0,1],[0,2],[1,2],[3,4],[3,5]]))