/**
 * There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). 
 * The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. 
 * Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.

You want to determine if there is a valid path that exists from vertex source to vertex destination.

 Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise.

 Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
    Output: true
    Explanation: There are two paths from vertex 0 to vertex 2:
    - 0 → 1 → 2
    - 0 → 2

 ** Thoughts...
   convert edge list format to adjacent list for easy iteration
   {
     0: [1, 2], 
     1: [0, 2],
     2: [1, 0]
   }
    We used dfs to traverse every node neighbour in the tree till we get to target
    We track visited node so we dont enter infinite loop since it is bidirectional
 */

function validPath (edges, source, destination) {
    if (source === destination) return true;
    const graph = buildGraph(edges);
    let visted = new Set();

    function dfs(node) {
        if (node === destination) return true;
        visted.add(node);
        for (let curr of graph[node]) {
            if (!visted.has(curr)) {
                if (dfs(curr)) {
                    return true;
                }
            }
        }
        return false;
    }
    return dfs(source)
}

function validPathBFS(edges, source, destination) {
    if (source === destination) return true;
    const queue = [source];
    const visited = new Set();
    const graph = buildGraph(edges)
    while (queue.length > 0) {
        const currentNode = queue.shift();
        visited.add(currentNode);
        if (currentNode === destination) return true;
        for (let curr of graph[currentNode]) {
            if (!visited.has(curr)) {
                queue.push(curr)
            }
        }
    }
    return false;
}

function buildGraph(edges) {
    const graph = {}
    for (let edge of edges) {
        let [a, b] = edge;
        // Create a new key with empty array if it doesn't exist
        if (!(a in graph)) {
            graph[a] = [];
        }
        
        if (!(b in graph)) {
            graph[b] = [];
        }
        // push both ways because it is bi directional.
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}

console.log(validPathBFS([[0,1],[0,2],[3,5],[5,4],[4,3]], 0, 5))
console.log(validPathBFS([[0,1],[1,2],[2,0]], 0, 2))