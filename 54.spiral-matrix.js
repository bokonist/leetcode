/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let xlb = 0,
    xub = n - 1;
  let ylb = 0,
    yub = m - 1;

  let result = [];
  while (xub >= xlb || yub >= ylb) {
    if (ylb <= yub) {
      for (let i = xlb; i <= xub; i++) {
        result.push(matrix[ylb][i]);
      }
      ylb++;
    }
    if (xlb <= xub) {
      for (let i = ylb; i <= yub; i++) {
        result.push(matrix[i][xub]);
      }
      xub--;
    }
    if (ylb <= yub) {
      for (let i = xub; i >= xlb; i--) {
        result.push(matrix[yub][i]);
      }
      yub--;
    }
    if (xlb <= xub) {
      for (let i = yub; i >= ylb; i--) {
        result.push(matrix[i][xlb]);
      }
      xlb++;
    }
  }
  return result;
};

// [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// [[1,2,3],[4,5,6],[7,8,9],[10,11,12]]
// @lc code=end

// @after-stub-for-debug-begin
module.exports = spiralOrder;
// @after-stub-for-debug-end
