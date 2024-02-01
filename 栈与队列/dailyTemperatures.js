/**
 * @param {number[]} []
 * @return {number[]} 
 */
function dailyTemperatures(T) {
    const stack = []
    let res = (new Array(T.length)).fill(0)
    for(let i=0; i < T.length ; i++){
        if(stack.length && T[i] > T[stack[stack.length - 1]]) {
            while(T[i] > T[stack[stack.length - 1]]) {
                res[stack[stack.length - 1]] = i - stack[stack.length - 1]
                stack.pop()
            }
        }
        stack.push(i) 
    }
    return res
}