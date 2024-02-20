// [5, 3, 2, 4, 1]
// [1, 2, 3, 4, 5]
/**
 * @param {number[]} arr
 * @return {number[]}
 */
// function bubbleSort(arr) {
//     // 缓存数组长度
//     const len = arr.length  
//     // 外层循环用于控制从头到尾的比较+交换到底有多少轮
//     for(let i=0;i<len;i++) {  
//         // 内层循环用于完成每一轮遍历过程中的重复比较+交换
//         for(let j=0;j<len-1;j++) {
//             // 若相邻元素前面的数比后面的大
//             if(arr[j] > arr[j+1]) {  
//                 // 交换两者
//                 [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
//             }
//         }
//     }
//     // 返回数组
//     return arr
// }

// function bubbleSort(arr) {
//     const len = arr.length  
//     for(let i=0;i<len;i++) {
//         // 注意差别在这行，我们对内层循环的范围作了限制
//         for(let j=0;j<len-1-i;j++) {
//             if(arr[j] > arr[j+1]) {
//                 [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
//             }
//         }
//     }
//     return arr
// }

// function bubbleSort(arr) {
//     let len = arr.length
//     for(let i = 0; i < len; i++){
//         let flag = false
//         for(let j = 0; j < len - 1; j++){
//             if(arr[j] > arr[j+1]){
//                 [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
//                 flag = true
//             }
//         }
//         if(flag === false) {
//             return arr
//         }
//     }

//     return arr
// }