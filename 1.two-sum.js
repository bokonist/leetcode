/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const compliment = {};
  for (let i = 0; i < nums.length; i++) {
    if (compliment[nums[i]] >= 0) {
      return [i, compliment[nums[i]]];
    }
    compliment[target - nums[i]] = i;
  }
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = twoSum;
// @after-stub-for-debug-end
