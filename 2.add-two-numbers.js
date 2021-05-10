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
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  size() {
    let node = this.head;
    let count = 0;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
  push(newNode) {
    if (this.head === null) {
      this.head = newNode;
      return 0;
    }
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    node.next = newNode;
    return 0;
  }
}
var addTwoNumbers = function (l1, l2) {
  let resultlist = new LinkedList();
  let l1list = new LinkedList(l1);
  let l2list = new LinkedList(l2);
  let carry = 0,
    sum = 0,
    i = 0;
  let num1, num2;
  let listLen = Math.max(l1list.size(), l2list.size());
  while (i < listLen || carry === 1) {
    num1 = l1 ? l1.val : 0;
    num2 = l2 ? l2.val : 0;
    sum = num1 + num2 + carry;
    carry = 0;
    if (sum >= 10) {
      let newNode = new ListNode(sum % 10, null);
      resultlist.push(newNode);
      carry = 1;
    } else {
      let newNode = new ListNode(sum, null);
      resultlist.push(newNode);
    }
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
    i++;
  }
  return resultlist.head;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = addTwoNumbers;
// @after-stub-for-debug-end
