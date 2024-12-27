/**
 * 题目描述：
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 注意：给定 n 是一个正整数。
 * 示例 1：
 * 输入： 2
 * 输出： 2
 * 解释： 有两种方法可以爬到楼顶。
 * 1 阶 + 1 阶
 * 2 阶
 * 示例 2：
 * 输入： 3
 * 输出： 3
 * 解释： 有三种方法可以爬到楼顶。
 * 1 阶 + 1 阶 + 1 阶
 * 1 阶 + 2 阶
 * 2 阶 + 1 阶
*/

//递归
/**
 * @param {number} n
 * @return {number}
 */
function recursionClimbStairs(n) {
    if(n === 1) {
        return 1
    } 

    if(n === 2) {
        return 2
    }

    //递归计算
    return recursionClimbStairs(n-1) + recursionClimbStairs(n-2)
}
console.log(recursionClimbStairs(3))

//递归 + 记忆化搜索
//定义记忆数组
const memoArr = []
function memoClimbStair(n) {
    if(n === 1) {
        return 1
    }

    if(n === 2) {
        return 2
    }

    if(f[n] === undefined) f[n]  = climbStair(n - 1) + climbStair(n - 2)

    return f[n]
}

//动态规划
function dynamicClimbStair(n) {
    // 初始化状态数组
    const f = []

    // 初始化已知值
    f[1] = 1
    f[2] = 2

    // 动态更新每一层楼梯对应的结果
    for(let i = 3; i <= n; n++){
        f[n] = f[i-2] + f[i-1]
    }

    // 返回目标值
    return f[n]
}