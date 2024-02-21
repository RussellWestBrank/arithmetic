// [5, 3, 2, 4, 1]
// [1, 2, 3, 4, 5]

function insertSort(arr) {
  //缓存数组长度
  let len = arr.length
  // temp 用来保存当前需要插入的元素
  let temp
  for(let i = 1; i < len; i++){
   temp = arr[i]
   let j = i
   while(j > 0 && arr[j-1] > temp) {
     arr[j] = arr[j-1]
     j--
   }
   arr[j] = temp
  }
 }

  insertSort([5, 3, 2, 4, 1])
  