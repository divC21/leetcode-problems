var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let result = new ListNode();
  let resultHead = result;

  while (l1 || l2 || carry) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = Math.floor(sum / 10);
    let digit = sum % 10;

    let newNode = new ListNode(digit);
    result.next = newNode;
    result = result.next;

    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }
  return resultHead.next;
};
