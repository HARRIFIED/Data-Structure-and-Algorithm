/**
 * You are given an m x n matrix board containing letters 'X' and 'O', capture regions that are surrounded:

    ** Connect: A cell is connected to adjacent cells horizontally or vertically.
    ** Region: To form a region connect every 'O' cell.
    ** Surround: The region is surrounded with 'X' cells if you can connect the region with 'X' cells and none of the region cells are on the edge of the board.
    ** To capture a surrounded region, replace all 'O's with 'X's in-place within the original board. You do not need to return anything.
   
    Example 1:
    Input: board = [
        ["X","X","X","X"],
        ["X","O","O","X"],
        ["X","X","O","X"],
        ["X","O","X","X"]
    ]
    Output: [
        ["X","X","X","X"],
        ["X","X","X","X"],
        ["X","X","X","X"],
        ["X","O","X","X"]
    ]
    
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if (!board || !board[0].length) return;
    const rows = board.length;
    const col = board[0].length;

    // to explore all the edges of the board two edge cols then top and bottom rows
    for (let r = 0; r < rows; r++) {
        for (let c of [0, col - 1]) {
            if (board[r][c] === "O") {
                explore(board, r, c);
            }
        }
    }

    for (let c = 0; c < col; c++) {
        for (let r of [0, rows - 1]) {
            if (board[r][c] === "O") {
                explore(board, r, c);
            }
        }
    }

    // capture all lands with "O" and marking as "X" and restoring all safe lands "S" to "O" 
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < col; c++) {
            if (board[r][c] === "O") {
                board[r][c] = "X";
            } else if (board[r][c] === "S") {
                board[r][c] = "O";
            }
        }
    }
};

function explore(board, r, c) {
    if (r < 0 || r >= board.length || c < 0 || c >= board[0].length || board[r][c] !== "O") return;

    //Mark land as safe
    board[r][c] = "S";

    //explore all 4 movements
    explore(board, r + 1, c)
    explore(board, r - 1, c)
    explore(board, r, c + 1)
    explore(board, r, c - 1)
}