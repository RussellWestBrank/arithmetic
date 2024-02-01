function ListNode(val) {
    this.val = val
    this.next = null
}

/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
// 入参是头结点、m、n
const reverseBetween = function(head, m, n) {
    let pre,cur
    let dummy = new ListNode()
    dummy.next = head

    pre = dummy
    cur = dummy
    // p是一个游标，用于遍历，最初指向 dummy
    let p = dummy  
    // p往前走 m-1 步，走到整个区间的前驱结点处
    for(let i=0;i<m-1;i++){
        p = p.next
    }

    let leftHead = p
    let start = leftHead.next
    pre = start
    cur = pre.next
    for(let i=m; i < n; m++) {
        let next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    leftHead.next = pre
    start.next = cur

    return dummy.next
};
let head = new ListNode(1)
head.next = new ListNode(1)
head.next.next= new ListNode(1)
head.next.next.next = new ListNode(2)
head.next.next.next.next = new ListNode(3)
reverseBetween(head,1,5)