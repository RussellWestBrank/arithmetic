// 题目描述：给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

// 示例: 输入: n = 4, k = 2
// 输出:
// [
// [2,4],
// [3,4],
// [2,3],
// [1,2],
// [1,3],
// [1,4],
// ]

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
function combine(n, k) {
    const res = []
    const cur = []

    dfs(1)

    function dfs(nth) {
        if(nth === n + 1){
            if(cur.length ===2) res.push(cur.slice())
            return
        }
        dfs(nth+1)
        cur.push(nth)
        dfs(nth+1)
        cur.pop()
    }

    return res
}
combine(4, 2)
