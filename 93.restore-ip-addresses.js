/*
 * @lc app=leetcode id=93 lang=javascript
 *
 * [93] Restore IP Addresses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
let resultList = [];
function isValidIPSegment(segment) {
  if (segment == "") {
    return false;
  }
  let num = Number(segment);
  if (num >= 0 && num <= 255) {
    if (segment[0] == "0") {
      //leading 0
      if (segment.length == 1) {
        //0 is the only character
        return true;
      } else {
        //0 followed by numbers
        return false;
      }
    }
    return true;
  } else return false;
}
function IpBuild(str, dotsLeft, lastResult) {
  if (dotsLeft === 1) {
    if (isValidIPSegment(str)) {
      resultList.push(lastResult.slice(1) + "." + str);
      return;
    } else return;
  }
  let newSegment;
  for (let i = 0; i < 3; i++) {
    newSegment = str.slice(0, i + 1);
    let res = isValidIPSegment(newSegment);
    if (res) {
      IpBuild(
        str.slice(newSegment.length),
        dotsLeft - 1,
        lastResult + "." + newSegment
      );
    }
  }
}
var restoreIpAddresses = function (s) {
  resultList = [];
  if (s.length > 12 || s.length < 4) {
    return resultList;
  }
  IpBuild(s, 4, "");
  return resultList;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = restoreIpAddresses;
// @after-stub-for-debug-end
