//真题描述：给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

// 示例 1:
// 输入: 1->1->2
// 输出: 1->2
// 示例 2:
// 输入: 1->1->2->3->3
// 输出: 1->2->3
function deleteDuplicates(head) {
    let cur = head
    while(cur !== null && cur.val !== null) {
        if(cur.val === cur.next.val){
            cur.next = cur.next.next
        }else{
            cur = cur.next
        }
    }
    return head
}

// 真题描述：给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中 没有重复出现的数字。
// 示例 1:
// 输入: 1->2->3->3->4->4->5
// 输出: 1->2->5
// 示例 2:
// 输入: 1->1->1->2->3
// 输出: 2->3

function ListNode(val) {
    this.val = val
    this.next = null
}

function deleteDuplicates(head) {
    if(!head || !head.next){
        return head
    }

    let dummy = new ListNode()
    dummy.next = head
    let cur = dummy

    while(cur.next && cur.next.next){
        if(cur.next.val === cur.next.next.val){
            let val = cur.next.val
           while(cur.next && cur.next.val === val){
            cur.next = cur.next.next
           }
        }else{
            cur = cur.next
        }
       
    }
    return dummy.next
}
let head = new ListNode(1)
head.next = new ListNode(1)
head.next.next= new ListNode(1)
head.next.next.next = new ListNode(2)
head.next.next.next.next = new ListNode(3)
console.log(deleteDuplicates(head));
