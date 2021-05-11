/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
function digitString(s) {
  let result = "";
  let countCurrent;
  for (let i = 0; i < s.length; i++) {
    countCurrent = 1;
    while (s[i + 1] !== undefined && s[i] === s[i + 1]) {
      countCurrent++;
      i++;
    }
    result += countCurrent.toString() + s[i];
  }
  return result;
}
var countAndSay = function (n) {
  if (n === 1) {
    return "1";
  } else {
    return digitString(countAndSay(n - 1));
  }
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = countAndSay;
// @after-stub-for-debug-end
