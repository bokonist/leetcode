/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  if (x === 0) return true;
  let i = x,
    arr = [];
  while (i > 0) {
    arr.unshift(i % 10);
    i = Math.floor(i / 10);
  }
  let pointer = 0;
  let length = arr.length;
  while (true) {
    if (pointer === length - 1 - pointer) {
      //middle element
      return true;
    }
    if (pointer === length - 1 - pointer - 1) {
      //middle 2 elements
      if (arr[pointer] === arr[pointer + 1]) return true;
    }
    if (arr[pointer] === arr[length - 1 - pointer]) {
      pointer++;
      continue;
    }
    return false;
  }
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = isPalindrome;
// @after-stub-for-debug-end
