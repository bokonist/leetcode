/*
 * @lc app=leetcode id=61 lang=javascript
 *
 * [61] Rotate List
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
 * @param {number} k
 * @return {ListNode}
 */
function listLength(head) {
  let count = 0;
  while (head) {
    count++;
    head = head.next;
  }
  return count;
}
var rotateRight = function (head, k) {
  let len = listLength(head);
  if (len === 0) {
    return head;
  } else {
    k = k % len;
    if (k === 0) {
      return head;
    }
  }

  let headPointer = head,
    tailPointer = head,
    headStart = k;
  while (headPointer.next) {
    if (headStart === 0) {
      tailPointer = tailPointer.next;
    } else {
      headStart--;
    }
    headPointer = headPointer.next;
  }
  headPointer.next = head;
  head = tailPointer.next;
  tailPointer.next = null;
  return head;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = rotateRight;
// @after-stub-for-debug-end
