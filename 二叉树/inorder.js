function inorder(root) {
    const res = []
    if(!root) {
        return res
    }
    const stack = []
    stack.push(root)
    const cur = root
    while(cur || stack.length) {
        while(cur) {
            stack.push(cur)
            cur = cur.left
        }
        cur = stack.pop()
        res.push(cur.val)
        cur = cur.right

    }
    return res
}