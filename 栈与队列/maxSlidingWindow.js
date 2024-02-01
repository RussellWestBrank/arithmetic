
// /**
//  * 
//  * @param {number[]} nums 
//  * @param {number} k 
//  * @return {number[]}
//  */
// //双指针 + 遍历法
// function maxSlidingWindow(nums, k) {
//     const maxNums = []
//     let left = 0
//     let right = k-1
//     while(right <= nums.length -1) {
//         let max = nums[left] 
//         for(let i = left; i<= right; i++) {
//             if(nums[i] > max) {
//                 max = nums[i]
//             }
//         }
//         maxNums.push(max)
//         left++
//         right++
//     }
//     return maxNums
// }

//双端队列法
function maxSlidingWindow(nums, k) {
    let deque = []
    const res = []

    for(let i = 0; i<nums.length; i++) {
        if(deque.length === 0) {
            deque.push(nums[i])  
        }else{
            while(nums[i] > deque[deque.length -1]) {
                deque.pop()
            }
            deque.push(nums[i])
        }
        if(i >= k -1) {
            res.push(deque[0])
            if(deque[0] === nums[i-2]) {
                deque.shift()
            }
        }
        
    }
    return res
}
const a = maxSlidingWindow([1,3,-1,-3,5,3,6,7,1,3,8], 3)
console.log(a);