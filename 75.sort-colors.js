/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let myMap = [0, 0, 0];
  let count;
  for (let i = 0; i < nums.length; i++) {
    myMap[nums[i]]++;
  }

  let index = 0;
  for (let i = 0; i < 3; i++) {
    count = myMap[i];
    for (let j = 0; j < count; j++) {
      nums[index++] = i;
    }
  }
};
// [2,0,2,1,1,0]
// @lc code=end

// @after-stub-for-debug-begin
module.exports = sortColors;
// @after-stub-for-debug-end
