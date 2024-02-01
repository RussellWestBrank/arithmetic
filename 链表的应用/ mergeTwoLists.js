function ListNode(val) {
    this.val = val
    this.next = null
}

function mergeTwoLists(l1,l2) {
    const head = new ListNode()
    let cur = head
    while(l1 && l2) {
        if(l1.val < l2.val){
            cur.next = l1
            l1 = l1.next
        }else{
            cur.next = l2
            l2 = l2.next
        }
        cur = cur.next
    }

    cur.next = l1!==null?l1:l2

    return head.next
}

const l1 = {
    val:1,
    next:{
        val:2,
        next:{
            val:4,
            next:null
        }
    }
}

const l2 = {
    val:1,
    next:{
        val:3,
        next:{
            val:4
        }
    }
}

let a = mergeTwoLists(l1,l2)
console.dir(mergeTwoLists(l1,l2));