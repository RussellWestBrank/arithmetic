

// function TreeNode(val){
//     this.val = val;
//     this.left = this.right = null;
// }
const node = new TreeNode(1)
node.left = new TreeNode(2)
node.right = new TreeNode(3)
node.left.left = new TreeNode(4)
node.left.right = new TreeNode(5)
node.right.left = new TreeNode(6)
node.right.right = new TreeNode(7)

//递归方法
// function postorder(root) {
//     // 递归边界，root 为空
//     if(!root) {
//         return 
//     }

//     // 递归遍历左子树 
//     postorder(root.left)  
//     // 递归遍历右子树  
//     postorder(root.right)
//     // 输出当前遍历的结点值
//     console.log('当前遍历的结点值是：', root.val)  
// }
// postorder(node)


// 题目描述：给定一个二叉树，返回它的前序（先序）遍历序列。
//示例: 输入: [1,null,2,3]
//输出: [1,2,3]
// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
//迭代法
function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function preorderTraversal(root) {
    //初始化结果数组
    const res = []
    //边界判断
    if(!root){
        return res
    }
    //初始化栈结构
    const stack = []
    //将根节点推入栈中
    stack.push(root)
    while(stack.length){
        //获取当前节点
        const cur = stack.pop()
        //将当前节点的值存入结果数组中
        res.push(cur.val)
        //是否有右子树，如果存在推入栈中
        if(cur.right) stack.push(cur.right)
        //是否有左子树，如果存在推入栈中
        if(cur.left) stack.push(cur.left)
    }

    return res
}
preorderTraversal(node)

