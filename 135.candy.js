/*
 * @lc app=leetcode id=135 lang=javascript
 *
 * [135] Candy
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let allSatisfied = false;
  let candyCount = ratings.length;
  let candies = [];
  for (let i = 0; i < candyCount; i++) {
    candies.push(1);
  }
  let leftRating, rightRating, leftCandy, rightCandy, myRating, myCandy;
  while (!allSatisfied) {
    allSatisfied = true;
    for (let i = 0; i < ratings.length; i++) {
      myRating = ratings[i];
      myCandy = candies[i];
      leftRating = ratings[i - 1] || null;
      rightRating = ratings[i + 1] || null;
      leftCandy = candies[i - 1] || null;
      rightCandy = candies[i + 1] || null;
      if (i === 0) {
        // first element
        if (myRating > rightRating) {
          //i has higher rating than right neightbor
          if (myCandy <= rightCandy) {
            //and has less candy
            candies[i]++;
            candyCount++;
            allSatisfied = false;
            continue;
          }
        }
      } else if (i === ratings.length - 1) {
        //last element
        if (myRating > leftRating) {
          //i has higher rating than left neighbor
          if (myCandy <= leftCandy) {
            //and has less candy
            candies[i]++;
            candyCount++;
            allSatisfied = false;
            continue;
          }
        }
      } else {
        if (myRating > leftRating) {
          //i has higher rating than left neighbor
          if (myCandy <= leftCandy) {
            //and has less candy
            candies[i]++;
            candyCount++;
            allSatisfied = false;
            continue;
          }
        }
        if (myRating > rightRating) {
          //i has higher rating than right neightbor
          if (myCandy <= rightCandy) {
            //and has less candy
            candies[i]++;
            candyCount++;
            allSatisfied = false;
            continue;
          }
        }
      }
    }
  }
  return candyCount;
};
//[1,3,2,2,1]
// @lc code=end

// @after-stub-for-debug-begin
module.exports = candy;
// @after-stub-for-debug-end
