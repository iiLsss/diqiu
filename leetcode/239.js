// 239. 滑动窗口最大值

// 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

// 返回 滑动窗口中的最大值 。

 

// 示例 1：
// // 
// 输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
// 输出：[3,3,5,5,6,7]
// 解释：
// 滑动窗口的位置                   最大值
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// 示例 2：

// 输入：nums = [1], k = 1
// 输出：[1]
 

// 提示：

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// 1 <= k <= nums.length
// 通过次数


// 思路 双向队列。递减。遇见大的就往前推
var maxSlidingWindow = function (nums, k) {
  let queue = []
  let res = []

  for (let i = 0; i < nums.length; i++) {

    while(queue.length && nums[queue[queue.length - 1]] <= nums[i]) {
      // 删除比当前小的
      queue.pop()
    }
    queue.push(i)

    if(queue[0] <= i - k ) {
      queue.shift()
    }

    if (i + 1 >= k ) {
      res[i - k + 1] = nums[queue[0]]
    }

  }
  return res

}



















var maxSlidingWindow = function(nums, k) {
  let queue = [] // 双向队列
   let res = []
   for (let i = 0; i < nums.length; i++) {
     
     while (queue.length && nums[queue[queue.length -1]] <= nums[i]) {
       queue.pop()
     }
     queue.push(i)
 
     if (queue[0] <= i -k) {
       queue.shift()
     }
     if (i + 1 >= k) {
       res[i+1 - k] = nums[queue[0]]
     }
   }
   return res
 };