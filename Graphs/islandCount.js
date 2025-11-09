/**
 * @param {character[][]} grid
 * @return {number}
 * r = rows c = columns
 */
var numIslands = function(grid) {
    if (!grid || grid.length === 0) return 0;
    let count = 0;

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] === "1") {
                count++;
                explore(grid, r, c) //explore and mark connected lands as visited
            }
        }
    }

    return count;
};

//DFS
function explore(grid, r, c) {
    //check boundary and water
    if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] === "0") return;

    //mark explored land as visited
    grid[r][c] = "0";

    //Explore in all 4 directions 
    explore(grid, r - 1, c) // up
    explore(grid, r + 1, c) // down
    explore(grid, r, c - 1) // left
    explore(grid, r, c + 1) // right
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