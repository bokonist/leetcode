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
  let satisfied = 0,
    cookieFound = -1;
  while (g.length > 0) {
    for (let i = 0; i < s.length; i++) {
      if (g[0] <= s[i]) {
        //found cookie at i
        cookieFound = i;
        break;
      }
    }
    //check if g[0] has a  cookie big enough in s[i]
    //if yes, increase satisified, discard cookie, discard child,
    //if no, discard child who is too greedy
    if (cookieFound >= 0) {
      satisfied++;
      s.splice(cookieFound, 1);
      g.shift();
      cookieFound = -1;
    } else {
      //no cookie found
      g.shift();
    }
  }

  return satisfied;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = findContentChildren;
// @after-stub-for-debug-end
