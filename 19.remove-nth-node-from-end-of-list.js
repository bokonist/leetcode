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
  let prevNodes = [],
    length = 0;
  while (head) {
    prevNodes.push(head);
    length++;
    head = head.next;
  }
  let prevIndex = length - n - 1;
  if (prevIndex < 0) {
    mainHead = mainHead.next;
    return mainHead;
  }
  prevNodes[prevIndex].next = prevNodes[prevIndex].next.next;
  return prevNodes[0];
};

//[1,2,3,4,5]\n2
// @lc code=end

// @after-stub-for-debug-begin
module.exports = removeNthFromEnd;
// @after-stub-for-debug-end
