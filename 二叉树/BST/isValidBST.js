// 题目描述：给定一个二叉树，判断其是否是一个有效的二叉搜索树。
// 假设一个二叉搜索树具有如下特征：
// 节点的左子树只包含小于当前节点的数。
// 节点的右子树只包含大于当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。

// 示例 1:
// 输入:
//   2
//  / \
// 1   3
// 输出: true

// 示例 2:
// 输入:
//   5
//  / \
// 1   4
//    / \
//   3   6
// 输出: false
// 解释: 输入为: [5,1,4,null,null,3,6]。
// 根节点的值为 5 ，但是其右子节点值为 4 。

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isValidBST(root) {
    if(!root) {
        return true
    }

    // 若右孩子不大于根结点值，或者左孩子不小于根结点值，则不合法
    if(root.val <= root.left?.val || root.val >= root.right?.val) return false
    // 左右子树必须都符合二叉搜索树的数据域大小关系
    return isValidBST(root.left) && isValidBST(root.right)

}