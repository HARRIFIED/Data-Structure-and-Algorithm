
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function(n, edges) {
    const graph = buildGraph(edges, n); // [ [ 1, 2 ], [ 0, 2 ], [ 0, 1 ], [ 4 ], [ 3 ], [] ]
    let visited = new Set();
    let count = 0;

    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) {
            const { noNodes, noEdges } = dfs(graph, i, visited);
            const actualEdges = noEdges / 2;

            const completeEdges = noNodes * (noNodes - 1) / 2;

            if (actualEdges === completeEdges) {
                count++;
            }
        }
    }

    return count;
}

function dfs(graph, start, visited) {
    let noNodes = 0;
    let noEdges = 0;

    const stack = [start];

    while (stack.length > 0) {
        const currNode = stack.pop();
        if (!visited.has(currNode)) {
            visited.add(currNode);
            noNodes++;
            for (let curr of graph[currNode]) {
                noEdges++;
                if (!visited.has(curr)) {
                    stack.push(curr);
                }
            }
        }
    }
    
    return {noNodes, noEdges};
}

function buildGraph(edges, n) {
    const graph = Array.from({length: n}, () => []);

    for (let [a, b] of edges) {
        graph[a].push(b);
        graph[b].push(a);
    }

    return graph
}


console.log(countCompleteComponents(6, [[0,1],[0,2],[1,2],[3,4],[3,5]]))

/**
 * A graph is completed if no of edges = n*(n-1) / 2 where n = number of nodes
 */