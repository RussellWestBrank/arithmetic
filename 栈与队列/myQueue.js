function MyQueue () {
    const stack1 = [];
    const stack2 = [];
  
    this.push = function(val) {
      stack1.push(val);
    }
  
    this.pop = function() {
        if(stack2.length) {
            return stack2.pop()
        }else{
            while(stack1.length > 0) {
                stack2.push(stack1.pop())
            }
            return stack2.pop()
        }
    }

    this.peek = function() {
        if(stack2.length) {
            return stack2.pop()
        }else{
            let length = stack1.length
            while(stack1.length > 0) {
                stack2.push(stack1.pop())
            }
            return stack2[stack2.length - 1]
        }
    }

    this.empty = function() {
        // 若 stack1 和 stack2 均为空，那么队列空
        return !stack1.length && !stack2.length;
    }
}
const queue = new MyQueue();
queue.push(1);
queue.push(2);
queue.push(4);
console.log(queue.pop()); 
console.log(queue.peek());// 返回 1
queue.push(5);
console.log(queue.pop()); // 返回 1
console.log(queue.empty()); // 返回 false