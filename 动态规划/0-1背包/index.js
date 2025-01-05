// 有 n 件物品，物品体积用一个名为 w 的数组存起来，
// 物品的价值用一个名为 value 的数组存起来；
// 每件物品的体积用 w[i] 来表示，每件物品的价值用 value[i] 来表示。
// 现在有一个容量为 c 的背包，
// 问你如何选取物品放入背包，
// 才能使得背包内的物品总价值最大？

// 注意：每种物品都只有1件

//二维数组
function knapsack(weights, values, capacity) {
    const n = weights.length;
    // 创建一个二维数组 dp，初始化为 0
    const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

    // 填充 dp 数组
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= capacity; j++) {
            if (j >= weights[i - 1]) {
                // 如果当前背包容量可以放下第 i 个物品
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weights[i - 1]] + values[i - 1]);
            } else {
                // 如果当前背包容量不足以放下第 i 个物品
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    // 返回最大价值
    return dp[n][capacity];
}

// 示例
const weights = [2, 3, 4, 5];  // 物品的重量
const values = [3, 4, 5, 6];   // 物品的价值
const capacity = 5;            // 背包的容量

console.log(knapsack(weights, values, capacity));  // 输出最大价值