/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
//["h","e","l"]
var reverseString = function (s) {
  let temp;
  let len = s.length;
  let half = Math.floor(s.length / 2);
  for (let i = 0; i < half; i++) {
    temp = s[i];
    s[i] = s[len - 1 - i];
    s[len - 1 - i] = temp;
  }
  return s;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = reverseString;
// @after-stub-for-debug-end
