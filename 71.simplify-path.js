/*
 * @lc app=leetcode id=71 lang=javascript
 *
 * [71] Simplify Path
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */

var simplifyPath = function (path) {
  let elements = path.split("/");
  let resultArray = [],
    result = "/";
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (element !== "" && element !== ".") {
      if (element === "..") {
        resultArray.length ? resultArray.pop() : "";
      } else {
        resultArray.push(element);
      }
    }
  }
  if (!resultArray.length) {
    return result;
  } else {
    for (let i = 0; i < resultArray.length; i++) {
      result += resultArray[i] + "/";
    }
  }
  result = result.slice(0, result.length - 1);
  return result;
}; // "/home//foo/../..././bar"
// @lc code=end

// @after-stub-for-debug-begin
module.exports = simplifyPath;
// @after-stub-for-debug-end
