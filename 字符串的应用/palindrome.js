//利用回文字符串具有对称的特性，判断是否是回文字符串
// function isPalindrome(str) {
//     const len = str.length
//     for (let i = 0; i < len / 2; i++) {
//         if (str[i] !== str[len - i - 1]) {
//             return false
//         }
//     }
//     return true
// }
// let a = 'ssaabb'
// console.log(isPalindrome(a));
// let b = 'ssaass'
// console.log(isPalindrome(b));

//真题描述：给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

// 示例 1: 输入: "aba"
// 输出: True
// 示例 2:
// 输入: "abca"
// 输出: True
// 解释: 你可以删除c字符。
// 注意: 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。
function validPalindrome(str) {
    const len = str.length;
    let left = 0, right = len -1;
    function isPalindrome(start,end) {
        while(start < end){
            if(str[start] === str){
                start++;
                end--;
            }else{
                return false
            }  
        }
        return true
    }
    while(left < right){
        if(str[left] === str[right]){
            left++;
            right--;
        }else{
            if(isPalindrome(left+1, right)){
                return true
            }
            if(isPalindrome(left, right -1)){
                return true
            }
            return false
        }
    }
    
    return true
    
}

let a = 'aba'
console.log(validPalindrome(a));
let b = 'abca'
console.log(validPalindrome(b));