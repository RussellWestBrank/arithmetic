function MinStack () {

    //初始化存储栈
    const stack = []

    //新增
    this.push = function(val) {
        stack.push(val)
    }

    //删除
    this.pop = function(val) {
        stack.pop(val)
    }

    //获取顶部值
    this.top = function() {
        return stack[stack.length - 1]
    }

    //获取最小值
    this.getMin = function() {
        let min = stack[0]
        for (let i = 0; i < stack.length; i++) {
            if(stack[i] < min) {
                min = stack[i]
            }
        }
        return min
    }
}
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.top());
console.log(minStack.getMin());