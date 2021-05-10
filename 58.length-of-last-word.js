/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    while (s[i] === " " && i > 0) {
      i--;
    }
    //dealt with trailing spaces
    while (s[i] !== " " && i >= 0) {
      count++;
      i--;
    }
    return count;
  }
  return count;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = lengthOfLastWord;
// @after-stub-for-debug-end
