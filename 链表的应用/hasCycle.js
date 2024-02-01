/**
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle(head) {
    while(head) {
        if(head.flag) return true
        head.flag = true
        head = head.next
    }
    return false
}