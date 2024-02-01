// 题目描述：给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
// 说明：解集不能包含重复的子集。

// 示例: 输入: nums = [1,2,3]
// 输出:
// [
// [3],
// [1],
// [2],
// [1,2,3],
// [1,3],
// [2,3],
// [1,2],
// []
// ]

/**
 * @param {number[]} nums
 * @return {number[[]]}
 */
function subsets(nums){
     // 初始化结果数组
    const res = []
    // 初始化组合数组
    const cur = []

    // 定义 dfs 函数，入参是 nums 中的数字索引
    function dfs(nth) {
        //递归边界
        if(nth === nums.length) {
            res.push(cur.slice())
            return
        }
        //递归式
        // 这是当前数字存在于组合中的情况，进一步 dfs
        cur.push(nums[nth])
        dns(nth+1)
        // 这是当前数字不存在与组合中的情况
        cur.pop()
        dns(nth+1)
    }

    dfs(0)

    return res
}

subsets([1,2,3])