/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let myMap = {
    "{": "}",
    "(": ")",
    "[": "]",
  };
  let revMap = {
    "}": "{",
    ")": "(",
    "]": "[",
  };
  let queue = [];
  for (let i = 0; i < s.length; i++) {
    if (myMap[s[i]]) {
      //opening bracket
      queue.push(s[i]);
    } else {
      //closing bracket
      if (queue[queue.length - 1] !== revMap[s[i]]) {
        return false;
      } else {
        queue.pop();
      }
    }
  }
  if (queue.length === 0) return true;
  else return false;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = isValid;
// @after-stub-for-debug-end
