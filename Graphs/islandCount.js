/**
 * @param {character[][]} grid
 * @return {number}
 * r = rows c = columns
 */
var numIslands = function(grid) {
    let count = 0;
    let visited = new Set();

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (explore(grid, r, c, visited)) {
                count++;
            }
        }
    }
    return count;
};

//DFS
function explore(grid, r, c, visited) {
    const rowInbound = 0 <= r && r < grid.length;
    const colInbound = 0 <= c && c < grid[0].length;

    if (!rowInbound || !colInbound) return false;
    if (grid[r][c] === "0") return false;
    const coordinate = r + "," + c;
    
    if (visited.has(coordinate)) return false;
    visited.add(coordinate);

    explore(grid, r - 1, c, visited);
    explore(grid, r + 1, c, visited);
    explore(grid, r, c - 1, visited);
    explore(grid, r, c + 1, visited);
    return true;
}



console.log(numIslands([
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]))
console.log(numIslands([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]))