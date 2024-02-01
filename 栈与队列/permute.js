//题目描述：给定一个没有重复数字的序列，返回其所有可能的全排列。

// 示例：   
// 输入: [1,2,3]
// 输出: [
// [1,2,3],
// [1,3,2],
// [2,1,3],
// [2,3,1],
// [3,1,2],
// [3,2,1]
// ]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
    //记录返回值
    const res=[]
    //记录重复使用
    const visited = {}
    //记录nums长度
    const length = nums.length
    //记录当前数组
    const cur = []

    //重复式
    function dns(nth) {
        if(nth === length) {
            res.push(cur.slice())
            return
        }
        for(let i = 0; i < length; i++){
            if(!visited[nums[i]]){
                cur.push(nums[i])
                visited[nums[i]] = 1
                dns(nth+1)
                cur.pop()
                visited[nums[i]] = 0
            }
        }
    }
     dns(0)

     return res
}
console.log(permute([1,2,3]));
