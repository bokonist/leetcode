/*
 * @lc app=leetcode id=455 lang=javascript
 *
 * [455] Assign Cookies
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */

//test case [10,9,8,7]\n[5,6,7,8]
function numSort(a, b) {
  return Number(a) - Number(b);
}

var findContentChildren = function (g, s) {
  g.sort(numSort);
  s.sort(numSort);
  let satisfied = 0, //also functions as gPointer
    cookieFound = -1,
    sPointer = 0;
  while (sPointer < s.length) {
    //check if g[satisified] has a  cookie big enough in s[i]

    //if yes discard cookie, discard child,
    if (g[satisfied] <= s[sPointer]) {
      //found cookie
      satisfied++;
      sPointer++;
    } else {
      //these small cookies are too small to satify anyone
      //so we discard them as to not keep checking them again
      sPointer++;
    }
  }

  return satisfied;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = findContentChildren;
// @after-stub-for-debug-end
