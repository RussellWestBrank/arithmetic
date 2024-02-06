function isBlanced (root) {
   //立一个flag，如果高度差绝对值大于1，这个flag就会被置为false
   let flag = true
   function dfs(root) {
    if(!root || !flag) {
        return 0
    }
    root.left = dfs(root.left)
    root.right = dfs(root.right)
    if(Math.abs(root.left - root.right) > 1) {
        flag = false
    }
    return Math.max(root.left, root.right) + 1
   }

   dfs(root)

   return flag
}