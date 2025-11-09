/**
 * @param {character[][]} grid
 * @return {number}
 * r = rows c = columns
 */
var minimiumIsland = function(grid) {
    if (!grid || grid.length === 0) return 0;
    let min = Infinity;

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] === "1") {
                min = Math.min(min, explore(grid, r, c));
            }
        }
    }

    return min;
}

//DFS
function explore(grid, r, c) {
    //Check boundary and water
    if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] === "0") {
        return 0
    }

    //Mark every land that we have visited as water
    grid[r][c] = "0";

    return  1 + 
        explore(grid, r - 1, c) + 
        explore(grid, r + 1, c) + 
        explore(grid, r, c - 1) + 
        explore(grid, r, c + 1);
}

console.log(minimiumIsland([
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]))
console.log(minimiumIsland([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]))