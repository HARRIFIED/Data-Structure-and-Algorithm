/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  if (!grid || grid.length === 0) return 0;
  let max = -Infinity;
  
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
        if (grid[r][c] === 1) {
            const area = explore(grid, r, c);
            max = Math.max(max, area);
        }
    }
  }
  return max;
};

//DFS
function explore(grid, r, c) {
    //Check boundary && water
    if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] === 0) {
        return 0;
    }

    //mark visited
    grid[r][c] = 0;

    let area = 1;
    area += explore(grid, r - 1, c);
    area += explore(grid, r + 1, c);
    area += explore(grid, r, c - 1);
    area += explore(grid, r, c + 1);

    return area;
}

console.log(maxAreaOfIsland([
    [0,0,1,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,1,1,0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,1,1,0,0,1,0,1,0,0],
    [0,1,0,0,1,1,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0]
]))