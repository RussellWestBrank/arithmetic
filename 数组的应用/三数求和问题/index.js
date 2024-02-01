/* 真题描述：给你一个包含 n 个整数的数组 nums，
判断 nums 中是否存在三个元素 a，b，c ，
使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
注意：答案中不可以包含重复的三元组。*/

/* 示例： 给定数组 nums = [-1, 0, 1, 2, -1, -4]， 
满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ] */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const threeSum = function (nums) {
    // 给nums排序
    nums = nums.sort((a, b) => {
        return a - b
    })

    // 用于存放结果数组
    let res = []

    let length = nums.length - 1

    for (let i = 0; i < length - 2; i++) {
        let j = i + 1
        let k = length - 1

        // 如果遇到重复的数字，则跳过
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }

        while (j < k) {
            if (nums[i] + nums[j] + nums[k] > 0) {
                k--
                while (j < k && nums[k] === nums[k + 1]) {
                    k--
                }
            } else if (nums[i] + nums[j] + nums[k] > 0) {
                j++
                while (j < k && nums[j] === nums[j - 1]) {
                    j++
                }
            } else {
                res.push([nums[i], nums[j], nums[k]])
                j++
                k--
                // 若左指针元素重复，跳过
                while (j < k && nums[j] === nums[j - 1]) {
                    j++
                }

                // 若右指针元素重复，跳过
                while (j < k && nums[k] === nums[k + 1]) {
                    k--
                }
            }
        }

    }
    return res

}

const nums = [-1, 0, 1, 2, -1, -4, 2, 3, 0, -1]
console.dir(JSON.stringify(threeSum(nums)));