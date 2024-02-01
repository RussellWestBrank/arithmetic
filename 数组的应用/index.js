/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void}
 */
function merge(nums1, m, nums2, n){
    let i = m - 1, j = n - 1, k = m + n -1;
    while(i >= 0 && j >= 0){
        if(nums1[i] < nums2[j]) {
             nums1[k] = nums2[j];
             k--
             j--
        }else{
            nums1[k] = nums1[i]
            i--
            k--
        }
    }
    if(i < 0) {
        while(j < 0) {
            nums1[k] = nums2[j]
        }
        k--
        j--
    }
}
const nums1 = [1,2,3,0,0,0], m = 3
const nums2 = [2,5,6], n = 3
merge(nums1, m, nums2, n)
console.log(nums1);