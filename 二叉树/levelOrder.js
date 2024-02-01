/**
 * 题目描述：给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
 * 示例： 二叉树：[3,9,20,null,null,15,7], 
 *
 *   3
 *  / \
 * 9  20
 *   /  \
 *  15   7
 *返回其层次遍历结果：
 *[
 *[3],
 *[9,20],
 *[15,7]
 *]
 */
function levelOrder(root) {
    //初始化结果数组
    const res = []
    //边界条件
    if(!root){
        return res
    }
    //初始化队列结构
    const queue = []
    //将根节点推入队列
    queue.push(root)
    while(queue.length) {
        //存储当前层的节点
        const level = []
       // 缓存刚进入循环时的队列长度，这一步很关键，因为队列长度后面会发生改变
       const len = queue.length
       for(let i = 0; i < len; i++) {
        const top = queue.shift()
        level.push(top.val)
        if(top.left) queue.push(top.left)
        if(top.right) queue.push(top.right)
       }
        // 将 level 推入结果数组
        res.push(level)
    }
    // 返回结果数组
    return res
}