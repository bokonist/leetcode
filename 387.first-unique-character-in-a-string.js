/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let myMap = new Map();
  for (let i = 0; i < s.length; i++) {
    myMap.get(s[i])
      ? myMap.get(s[i]).count++
      : myMap.set(s[i], { count: 1, firstIndex: i });
  }
  let resultIndex = -1;
  for (const [key, item] of myMap) {
    if (item.count == 1) {
      return item.firstIndex;
    }
  }
  return resultIndex;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = firstUniqChar;
// @after-stub-for-debug-end
