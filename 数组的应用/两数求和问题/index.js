/*真题描述： 
给定一个整数数组 nums 和一个目标值 target，
请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。
你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。*/

/*示例: 给定 nums = [2, 7, 11, 15], target = 9
因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1] */


//式例一
// function twoSum(arr) {
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[i] + arr[j] === 9){
//                 return [i, j]
//             }
//         }
//     }
// }

//优化
/* 思路
1. 求和问题都可以转化为求差问题。2+7 = 9 => 9 - 2 =7
2. 空间换时间：当发现自己的代码里有两层循环时，先反思一下，能不能用空间换时间，把它优化成一层循环
增加一个Map来记录已经遍历过的数字及其对应的索引值，
然后每遍历到一个新数字的时候，
都回到 Map 里去查询 targetNum 与该数的差值是否已经在前面的数字中出现过了。
若出现过，那么答案已然显现，我们就不必再往下走了。
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// const twoSum = function(nums, target) {
//     const map = new Map();
//     for(let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];
//         if(map.has(complement)) {
//             return [map.get(complement), i];
//         }
//         map.set(nums[i], i);
//     }
// }
const twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
}
const nums = [2, 7, 11, 15]
const target = 9
console.log(twoSum(nums, target))
