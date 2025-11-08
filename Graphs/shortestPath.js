// using BFS
const shortestPath = (edges, start, destination) => {
    const graph = buildGraph(edges);
    const queue = [{ node: start, distance: 0 }];
    let visited = new Set();

    while (queue.length > 0) {
        const { node, distance}  = queue.shift();
        console.log({node, distance})
        if (!visited.has(node)) {
            visited.add(node);
            console.log(node)
            if (node === destination) return distance;

            for (let curr of graph[node]) {
                if (!visited.has(curr)) {
                    queue.push({node: curr, distance: distance + 1})
                }
            }
        }
    }
    return -1
}

function buildGraph(edges) {
    const graph = {};

    for (let [a, b] of edges) {
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];

        graph[a].push(b);
        graph[b].push(a);
    }

    return graph;
}

console.log(shortestPath([
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
], 'w', 'z'))