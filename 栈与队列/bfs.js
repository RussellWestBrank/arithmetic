function BFS(root) {
    const queue = []
    queue.push(root)
    while(queue.length) {
        const top = queue.shift()
        if(top.left) {
            queue.push(top.left)
        }
        if(top.right){
            queue.push(top.right)
        }
        console.log(top.val);
    }
}

const root = {
    val: "A",
    left: {
      val: "B",
      left: {
        val: "D"
      },
      right: {
        val: "E"
      }
    },
    right: {
      val: "C",
      right: {
        val: "F"
      }
    }
  };
  BFS(root)