/*
 * @lc app=leetcode id=153 lang=javascript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  let middle = Math.floor((start + end) / 2);
  let prev = -1;
  while (start < end) {
    prev = middle - 1 >= 0 ? middle - 1 : 0;
    if (nums[middle] < nums[prev]) {
      return nums[middle];
    } else if (nums[middle] < nums[end]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  prev = middle - 1 >= 0 ? middle - 1 : 0;
  if (nums[middle] < nums[prev]) {
    return nums[middle];
  }
  return nums[0];
};
// [3,4,5,1,2]
// @lc code=end

// @after-stub-for-debug-begin
module.exports = findMin;
// @after-stub-for-debug-end
