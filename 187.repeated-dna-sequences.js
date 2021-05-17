/*
 * @lc app=leetcode id=187 lang=javascript
 *
 * [187] Repeated DNA Sequences
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  if (s.length < 10) {
    return [];
  }
  let myMap = new Map();
  let resultArray = [];
  for (let i = 0; i <= s.length - 10; i++) {
    let currentSlice = s.slice(i, i + 10);
    let prevCount = myMap.get(currentSlice);
    if (!prevCount) {
      myMap.set(currentSlice, 1);
    } else if (prevCount === 1) {
      resultArray.push(currentSlice);
      myMap.set(currentSlice, 2);
    }
  }
  return resultArray;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = findRepeatedDnaSequences;
// @after-stub-for-debug-end
