// 42. 接雨水
// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

// 示例 1：

// 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出：6
// 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 
// 示例 2：

// 1
// 1         1
// 1     1   1
// 1 1   1 1 1
// 1 1   1 1 1

// 输入：height = [4,2,0,3,2,5]
// 输出：9

// 思路 采用单调递减，遇见高的 开始计算比他矮的所能容积的体积

var trap = function (height) {
  if(!height.length) return 0
  let total = 0
  let stack = []
  for (let i = 0; i < height.length; i++) {
    
    while(stack.length && height[i] > height[stack[stack.length -1 ]]) {
      let cur = stack.pop()
      if (!stack.length) break
      let l = stack[stack.length-1]
      let h = Math.min(height[i], height[l]) - height[cur]
      total += h * (i - l - 1)
    }
    stack.push(i)
    
  }
  return total
}


const height =[0,1,0,2,1,0,1,3,2,1,2,1]

console.log(trap(height))















/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (!height.length) return

  let stack = []
  let total = 0
  for (let i = 0; i < height.length; i++) {
    while (stack.length && height[i] > height[stack[stack.length - 1]]) {
      let cur = stack.pop()

      if (!stack.length) break
      let l = stack[stack.length - 1]
      let h = Math.min(height[i], height[l]) - height[cur]
      total += h * (i - l - 1)
    }
    stack.push(i)
  }
  return total
};