/**
 * @param {TreeNode} root
 * @param {number} n
 * @return {TreeNode}
 */
function deleteNode(root, n){
    //如果没有找到目标值，直接返回
    if(!root) {
        return root
    }

    if(root.val === n) {
        // 若是叶子结点，则不需要想太多，直接删除
        if(!root.left && !root.right) {
            root = null
        }else if(root.left) {
            // 寻找左子树里值最大的结点
            const maxLeft = findMax(root.left)
            root.val = maxLeft.val
            root.left = deleteNode(root.left, maxLeft.val)
        }else {
            // 寻找右子树里值最小的结点
            const minRight = findMin(root.left)
            root.val = minRight.val
            root.right = deleteNode(root.right, minRight.val)
        }
    }

    return root
}

function findMax(root) { 
    while(root.right) {
        root = root.right
    }

    return root
}

function findMin(root) { 
    while(root.left) {
        root = root.left
    }

    return root
}