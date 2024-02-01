/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n){
    let dummy = new ListNode()
    dummy.next = head
    let fast = dummy
    let slow = dummy

    while(n >0) {
        fast = fast.next 
        n-- 
    }
    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next
    }
    slow.next = slow.next.next

    return dummy.next
}