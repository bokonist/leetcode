/*
 * @lc app=leetcode id=59 lang=javascript
 *
 * [59] Spiral Matrix II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let xlb = 0,
    xub = n - 1;
  let ylb = 0,
    yub = n - 1;

  let result = [];
  for (let i = 0; i < n; i++) {
    result.push([]);
  }
  let target = Math.pow(n, 2),
    current = 1;

  while (current <= target) {
    if (ylb <= yub) {
      for (let i = xlb; i <= xub; i++) {
        result[ylb][i] = current++;
      }
      ylb++;
    }
    if (xlb <= xub) {
      for (let i = ylb; i <= yub; i++) {
        result[i][xub] = current++;
      }
      xub--;
    }
    if (ylb <= yub) {
      for (let i = xub; i >= xlb; i--) {
        result[yub][i] = current++;
      }
      yub--;
    }
    if (xlb <= xub) {
      for (let i = yub; i >= ylb; i--) {
        result[i][xlb] = current++;
      }
      xlb++;
    }
  }
  return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = generateMatrix;
// @after-stub-for-debug-end
