
// const text = "This is an example: Date: 2023-12-01";
// const regex = /Date: (\d{4}-\d{2}-\d{2})/;

// const match = text.match(regex);

// if (match) {
//   const fullMatch = match[0];  // 整个匹配的字符串
//   const capturedGroup = match[1];  // 引用组中的内容

//   console.log('match:', match);
//   console.log("Full match:", fullMatch);
//   console.log("Captured group:", capturedGroup);
// } else {
//   console.log("No match found.");
// }
// const test = 'ha-ha,haa-haa,ha-haa'
// const regex = /(?:ha)-ha,(haa)-\1/g
// const match = test.match(regex);
// if (match) {
//   const fullMatch = match[0];  // 整个匹配的字符串
//   const capturedGroup = match[1];  // 引用组中的内容

//   console.log('match:', match);
//   console.log("Full match:", fullMatch);
//   console.log("Captured group:", capturedGroup);
// } else {
//   console.log("No match found.");
// }

// const test = 'ha-ha,haa-haa,ha-haa'
// const regex = /(ha)-\1,(haa)-\2/g
// const matchWithtest = regex.exec(test);
// console.log(matchWithtest); 
const str = '-91283saf472332aaa +222sss'
const regex =  /\s*([-\+]?[0-9]*).*/g;
const regex1 = /\s*([-\+]?[0-9]*).*/
console.log(str.match(regex));
console.log(str.match(regex1));
console.log(regex.exec(str));
console.log(regex1.exec(str));
// const pattern = /\d+/; // 匹配所有数字
// const result = "123aa 456as".match(pattern); // 返回 ["123", "456"]
// console.log(result);
