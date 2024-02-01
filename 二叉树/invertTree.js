// 题目描述：翻转一棵二叉树。

// 示例：
// 输入：
//     4
//   /   \
//  2     7
// / \   / \
// 1  3 6   9
// 输出：
//     4
//   /   \
//  7     2
// / \   / \
// 9  6 3   1

/**
 * @param {TreeNode} root
 * @return {TreeNode} 
 */
const root6 = {val: 9, left: null, right: null}
const root5 = {val: 6, left: null, right: null}
const root4 = {val: 3, left: null, right: null}

const root3 = {val: 1, left: null, right: null}
const root2 = {val: 7, left: root5, right: root6}
const root1 = {val: 2, left: root3, right: root4}
const root = {val: 4, left: root1, right: root2}

function invertTree(root){
    // 定义递归边界
    if(!root) {
        return root
    }

    if(root.left)  invertTree(root.left)
    if(root.right)  invertTree(root.right)
    const left = root.left
    root.left = root.right
    root.right = left

    return root
}
const res = invertTree(root);
console.log(res);