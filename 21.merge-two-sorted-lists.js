/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
let head, resultList;
function addToList(value) {
  let newNode = new ListNode(value, null);
  if (!resultList) {
    head = newNode;
    resultList = newNode;
  } else {
    resultList.next = newNode;
    resultList = resultList.next;
  }
}
var mergeTwoLists = function (l1, l2) {
  head = null;
  resultList = null;
  let num1, num2;
  while (l1 || l2) {
    num1 = l1 ? l1.val : -101;
    num2 = l2 ? l2.val : -101;
    if (num1 < num2) {
      if (num1 < -100) {
        addToList(num2);
        l2 = l2.next;
        continue;
      }
      addToList(num1);
      l1 = l1.next;
    } else if (num1 > num2) {
      if (num2 < -100) {
        addToList(num1);
        l1 = l1.next;
        continue;
      }
      addToList(num2);
      l2 = l2.next;
    } else {
      addToList(num1);
      addToList(num2);
      l1 = l1.next;
      l2 = l2.next;
    }
  }

  return head;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = mergeTwoLists;
// @after-stub-for-debug-end
