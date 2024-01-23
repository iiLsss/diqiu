

// 15. 三数之和
// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请

// 你返回所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

// 示例 1：

// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]
// 解释：
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
// 不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
// 注意，输出的顺序和三元组的顺序并不重要。
// 示例 2：

// 输入：nums = [0,1,1]
// 输出：[]
// 解释：唯一可能的三元组和不为 0 。
// 示例 3：

// 输入：nums = [0,0,0]
// 输出：[[0,0,0]]
// 解释：唯一可能的三元组和为 0 。
 


var threeSum = function(nums) {
  if (nums.length < 3) return []
    // 进行排序
  let numsSort =  nums.sort((a, b) => a - b)
  let res = []
  // 固定结果中三个数的第一个数，以第一个数进行遍历，0 ~ length-2
  for (let i = 0;  i < numsSort.length -2 ; i++) {
    let num = numsSort[i]
    // 当前的值 大于0 那么后续的肯定大于0 
    if (num > 0) break
    // 如果当前值 和上一个值相同。则跳过。非重复数据
    if (num === numsSort[i -1]) continue
    // 头指针
    let p1 = i + 1
    // 尾指针
    let p2 = numsSort.length - 1
    // 指针移动
    while(p1 < p2) {
      // 求和
      let sum = num + numsSort[p1] + numsSort[p2]
      // 如果 和为0
      if ( !sum ) {
        // 存入结果数组
        res.push([num, numsSort[p1], numsSort[p2]])
        // 判断头指针下值是否相同
        while(numsSort[p1] ===  numsSort[p1 + 1]) p1++
        // 判断尾指针下值是否相同
        while(numsSort[p2] ===  numsSort[p2 - 1]) p2--
        //  同时移动头尾指针 防止出现重复
        p1++
        p2--
      } else if (sum > 0) {
        // 移动尾指针
        p2--
      } else if (sum < 0) {
        // 移动头指针
        p1++
      }
    } 

  }

}





/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if(nums.length < 3) return []
  // 数组进行排序
  let sortNums = nums.sort((a,b) => a - b )
  let res = []

  for(let i = 0; i < nums.length - 2; i++){
    if (nums[i] > 0) break
    if (nums[i] === nums[i-1]) continue
    let p1 = i + 1
    let p2 = nums.length - 1
    while(p1 < p2) {
      let sum = sortNums[i] + sortNums[p1] + sortNums[p2] 
      if (sum === 0) {
        res.push([sortNums[i], sortNums[p1]], sortNums[p2])
        while (sortNums[p1] === sortNums[p1 + 1]) p1++
        while (sortNums[p2] === sortNums[p2 -1])  p2--
        p1++
        p2--
      } else if (sum > 0) {
        p2--
      } else {
        p1++
      }
    }
  }

}


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if(nums.length < 3) return []
  let sortNums = nums.sort((a,b) => a - b)
  let res = []
  for(let i = 0; i < sortNums.length - 2; i++){
      let p1 = i + 1
      let p2 = sortNums.length -1
      if (sortNums[i] > 0) break
      if (sortNums[i] === sortNums[i-1] ) continue
      while(p1 < p2) {
        let sum = sortNums[i] + sortNums[p1] + sortNums[p2] 

        if (!sum) {
            res.push([sortNums[i] ,sortNums[p1] , sortNums[p2]] )
            while (sortNums[p1] === sortNums[p1 + 1]) p1++
            while (sortNums[p2] === sortNums[p2 -1])  p2--
            p1 ++
            p2 --
        } else if(sum > 0) {
            p2 --
        } else {
            p1 ++
        }
      }
  }
  return res
 };