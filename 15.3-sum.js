/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/*
[-1, 0, 1, 2, -1, -4];
-4, -1, -1, 0, 1, 2;
*/
function compareArray(a, b) {
  for (let i = 0; i < 3; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
function isDuplicate(resultArray, element) {
  for (let i = 0; i < resultArray.length; i++) {
    if (compareArray(resultArray[i], element)) {
      return true;
    }
  }
  return false;
}
function numSort(a, b) {
  return Number(a) - Number(b);
}
var threeSum = function (nums) {
  nums.sort(numSort);
  let resultArray = [];
  for (let i = 0; i < nums.length; i++) {
    let currentElement = nums[i];
    //look through to rest to find a pair that adds up to 0-nums[i]
    let low = 0;
    let high = nums.length - 1;
    let target = 0 - nums[i];

    //here it becomes a 2sum problem, in the window, low to high,
    //find a pair that adds up to tempTarget
    while (low < high) {
      //ignore if the pointers are at current element's index
      if (low === i) {
        low++;
        continue;
      } else if (high === i) {
        high--;
        continue;
      }

      let res = nums[low] + nums[high];
      if (res === target) {
        //we found a pair, push the pair and the original element
        let element = [nums[i], nums[low], nums[high]];
        element.sort(numSort);
        if (!isDuplicate(resultArray, element)) {
          resultArray.push(element);
        }
        low++;
        high--;
      } else if (res > target) {
        // we overshot, so we squeeze the window from the right
        high--;
      } else {
        //undershot, squeeze from left
        low++;
      }
    }
  }
  return resultArray;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = threeSum;
// @after-stub-for-debug-end
