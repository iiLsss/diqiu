// 560. 和为 K 的子数组

// 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。

// 子数组是数组中元素的连续非空序列。

 

// 示例 1：

// 输入：nums = [1,1,1], k = 2
// 输出：2
// 示例 2：

// 输入：nums = [1,2,3], k = 3
// 输出：2
 

// 提示：

// 1 <= nums.length <= 2 * 104
// -1000 <= nums[i] <= 1000
// -107 <= k <= 107


var subarraySum = function(nums, k) {
  const prefixMap = new Map()
  let prefixSum = 0
  let total = 0 
  prefixMap.set(0, 1); // 初始前缀和为 0 的出现次数为 1

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i]
    if (prefixMap.has(prefixSum - k)) {
      total += prefixMap.get(prefixSum - k)
    }
    prefixMap.set(prefixSum, (prefixMap.get(prefixSum) || 0) + 1)
  }

  return total
};


// / 示例测试
const nums1 = [1, 1, 1];
const k1 = 2;
console.log(subarraySum(nums1, k1)); // 输出: 2

const nums2 = [1, 2, 3];
const k2 = 3;
console.log(subarraySum(nums2, k2)); // 输出: 2



// 在解决这个问题时，我们使用前缀和的概念来帮助我们计算子数组的和。前缀和是指从数组的起始位置到当前位置的元素之和。

// 例如，对于数组 [1, 2, 3, 4, 5]，它的前缀和数组为 [1, 3, 6, 10, 15]。在计算前缀和数组时，我们从左到右遍历原始数组，对于每个位置，将当前位置的元素加上前一个位置的前缀和得到当前位置的前缀和。

// 现在，让我们回到问题中。我们想要找到和为 k 的子数组的个数。我们可以使用前缀和来解决这个问题。

// 假设我们有一个子数组的和为 k，那么这个子数组的前缀和必然满足以下关系：prefixSum[j] - prefixSum[i] = k，其中 i 和 j 分别表示子数组的起始和结束位置。

// 我们可以对上述等式进行变换，得到 prefixSum[j] = prefixSum[i] + k。这意味着，如果我们知道了前缀和 prefixSum[j]，并且能够找到一个位置 i，使得 prefixSum[i] = prefixSum[j] - k，那么我们就找到了一个和为 k 的子数组。

// 因此，我们可以使用哈希表来存储前缀和及其出现的次数。遍历数组时，我们计算当前位置的前缀和，并在哈希表中查找是否存在前缀和为 prefixSum - k 的位置，如果存在，则说明存在一个和为 k 的子数组。同时，我们更新哈希表中当前前缀和的出现次数。

