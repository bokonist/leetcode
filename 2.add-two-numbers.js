/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var addTwoNumbers = function (l1, l2) {
  let resultlist, head;
  let carry = 0,
    sum = 0;
  let num1, num2;
  while (l1 || l2 || carry === 1) {
    num1 = l1 ? l1.val : 0;
    num2 = l2 ? l2.val : 0;
    sum = num1 + num2 + carry;
    carry = 0;
    if (sum >= 10) {
      let newNode = new ListNode(sum % 10, null);
      carry = 1;
      if (resultlist) {
        resultlist.next = newNode;
        resultlist = resultlist.next;
      } else {
        resultlist = newNode;
        head = newNode;
      }
    } else {
      let newNode = new ListNode(sum, null);
      if (resultlist) {
        resultlist.next = newNode;
        resultlist = resultlist.next;
      } else {
        resultlist = newNode;
        head = newNode;
      }
    }
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
    i++;
  }
  return head;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = addTwoNumbers;
// @after-stub-for-debug-end
