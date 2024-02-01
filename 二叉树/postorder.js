const node = new TreeNode(1)
node.left = new TreeNode(2)
node.right = new TreeNode(3)
node.left.left = new TreeNode(4)
node.left.right = new TreeNode(5)
node.right.left = new TreeNode(6)
node.right.right = new TreeNode(7)

function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}

// /**
//  * @param {TreeNode} root
//  * @return {number[]}
//  */
// function postorderTraversal(root) {
//     //初始化结果数组
//     const res = []
//     //边界判断
//     if(!root){
//         return res
//     }
//     //初始化栈结构
//     const stack = []

//     stack.push(root)

//     while(stack.length) {
//         const cur = stack.pop()
//         res.push(cur.val)
//         if(cur.left)(
//             stack.push(cur.left)
//         )
//         if(cur.right)(
//             stack.push(cur.right)
//         )
//     }

//     return res
// }
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const postorderTraversal = function(root) {
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
  while(stack.length) {
    const cur = stack.pop()
    res.unshift(cur.val)
    if(root.left) stack.push(root.left)
    if(root.right) stack.push(root.right)
  }

  return res
};
postorderTraversal(node)