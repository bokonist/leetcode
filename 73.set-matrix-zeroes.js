/*
 * @lc app=leetcode id=73 lang=javascript
 *
 * [73] Set Matrix Zeroes
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let rows = matrix[0].length,
    columns = matrix.length;
  let deleteRows = new Map(),
    deleteColums = new Map();
  for (let i = 0; i < columns; i++) {
    //row
    for (let j = 0; j < rows; j++) {
      //column
      if (matrix[i][j] === 0) {
        //mark it for Zero'ing
        deleteRows.set(i, true);
        deleteColums.set(j, true);
      }
    }
  }
  for (let [key] of deleteRows) {
    for (let k = 0; k < rows; k++) {
      matrix[key][k] = 0;
    }
  }
  for (let [key] of deleteColums) {
    for (let k = 0; k < columns; k++) {
      matrix[k][key] = 0;
    }
  }
  return matrix;
};
//[[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// @lc code=end

// @after-stub-for-debug-begin
module.exports = setZeroes;
// @after-stub-for-debug-end
