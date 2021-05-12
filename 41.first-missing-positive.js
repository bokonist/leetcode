/*
 * @lc app=leetcode id=41 lang=javascript
 *
 * [41] First Missing Positive
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function placeCorrect(nums, index) {
  let elementToBePlacedAtIndex = nums[index];
  let displacedValue = nums[elementToBePlacedAtIndex - 1];
  nums[elementToBePlacedAtIndex - 1] = elementToBePlacedAtIndex;
  nums[index] = displacedValue;
  if (
    displacedValue > 0 &&
    displacedValue < nums.length &&
    elementToBePlacedAtIndex != displacedValue
  ) {
    placeCorrect(nums, index);
  }
}
var firstMissingPositive = function (nums) {
  let length = nums.length;
  for (let i = 0; i < length; i++) {
    if (nums[i] < 0 || nums[i] > length) {
      nums[i] = 0;
    }
  }
  for (let i = 0; i < length; i++) {
    if (nums[i] > 0 && nums[i] < length && nums[i] - 1 !== i) {
      placeCorrect(nums, i);
    }
  }
  if (length === 1 && nums[0] === 0) return 1;
  if (length === 1 && nums[0] === 1) return 2;
  for (let i = 0; i < length; i++) {
    if (i !== nums[i] - 1) return i + 1;
  }
  return length + 1;
};
//[7,8,9,11,12]
// @lc code=end

// @after-stub-for-debug-begin
module.exports = firstMissingPositive;
// @after-stub-for-debug-end
