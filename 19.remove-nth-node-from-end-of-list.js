/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function (head, n) {
  let mainHead = head;
  let headPointer = head;
  let tailPointer = head;
  let headStart = n;
  while (head.next) {
    headPointer = headPointer.next;
    headStart--;
    if (headStart < 0) {
      tailPointer = tailPointer.next;
    }
    head = head.next;
  }
  if (headPointer === tailPointer) {
    //only 1 element or 0elements
    return null;
  } else if (tailPointer === mainHead) {
    //n is greater or equal to list size
    if (headStart > 0) {
      ///tail pointer is still trailing behind first index so remove first element
      mainHead = mainHead.next;
      return mainHead;
    }
  }
  tailPointer.next = tailPointer.next.next;
  return mainHead;
};

//[1,2,3,4,5]\n2
// @lc code=end

// @after-stub-for-debug-begin
module.exports = removeNthFromEnd;
// @after-stub-for-debug-end
