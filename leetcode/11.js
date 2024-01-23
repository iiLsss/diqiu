
// 11. 盛最多水的容器

// 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。

// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 返回容器可以储存的最大水量。

// 说明：你不能倾斜容器。


var maxArea = function(height) {
  if (height.length < 3) return Math.min(height[0], height[1])

  let maxArea = 0
  let p1 = 0
  let p2 = height.length - 1

  while(p1 < p2) {
    let l = p2 - p1
    if (height[p1] < height[p2]) {
      maxArea = Math.max(l * height[p1], maxArea)
      p1++
    } else {
      maxArea = Math.max(l * height[p2], maxArea)
      p2--
    }
  }
  return maxArea

}


/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  if (height.length < 3) return Math.min(height[0], height[1])
  // 最大面积
  let maxArea = 0
  // 头指针
  let p1 = 0
  // 尾指针
  let p2 = height.length - 1
  // 指针遍历 整个数组
  while(p1 < p2) {
    // 长度 x
    let l = p2 - p1
    // 判断头尾指针那个大
    if (height[p1] < height[p2]) {
      // 如果头指针小，获取最大面积
      maxArea = Math.max((l * height[p1], maxArea))
      // 尾指针向后移动
      p1++
    } else {
      // 尾指针小 获取最大面积
      maxArea = Math.max((l * height[p2], maxArea))
      // 尾指针向前移动
      p2--
    }
  }
  return maxArea
}




var maxArea = function(height) {
  if (height.length < 3) return Math.min(height[0], height[1])
  let max = 0
  let p1 = 0
  let p2 = height.length - 1
  while(p1 < p2) {
      let l = p2 - p1
      if (height[p1] < height[p2]) {
          max = Math.max(( l * height[p1]), max)
          p1 ++
      } else{
          max = Math.max(( l * height[p2]), max)
          p2 --
      }
  }
  return max
};