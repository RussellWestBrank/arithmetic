// 题目描述：将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
// 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

// 示例: 给定有序数组: [-10,-3,-1,0,2,5,9],
// 一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

//       0
//    /    \
//  -3      5
//  / \    / \
// -10 -1 2   9

function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}

/**
 * 
 * @param {number[]} nums
 * @return {TreeNode} 
 */
function sortedArrayToBST(nums) {
    if(!nums.length) {
        return null
    }
    const root = new TreeNode(nums[Math.floor(nums.length/2)])
    root.left = sortedArrayToBST(nums.slice(0, Math.floor(nums.length/2)))
    root.right = sortedArrayToBST(nums.slice(Math.floor(nums.length/2)+1))

    return  root
}
sortedArrayToBST([-10,-3,-1,0,2,5,9])