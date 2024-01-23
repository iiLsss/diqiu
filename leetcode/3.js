// 3. 无重复字符的最长子串

// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:

// 输入: s = "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
// 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

// 思路 遍历字符串 


var lengthOfLongestSubstring = function (s) {
  if (s.length < 2) return s.length

  let start = 0 // 非重复字段起始索引
  let max = 0 // 最大非重复字段长度
  let map = new Map() // 存放
  for(let i = 0; i < s.length; i++) {
    // 判断是否存在重复字段
    if (map.has(s[i])) {
      // 存在则更新start起始位置
      start  = Math.max(map.get(s[i]) + 1, start)
    }
    // 每次循环取最大长度
    max = Math.max(i - start + 1, max)
    map.set(s[i], i)
  }
  return max
}

console.log( lengthOfLongestSubstring('abcabcbb'))






















var lengthOfLongestSubstring = function (s) {
  if (!s.length) return 0
  // 起始位置
  let start = 0
  // 最大不重复
  let max = 0
  // 存放遍历的每一项
  let map = new Map()
  // 开始遍历
  for (let i = 0; i < s.length; i++) {
    // 如何这一项在map中存在
    if (map.has(s[i])) {
      // 则重新定义起点位置  取存在值得索引位置+1，start得最大值
      start = Math.max(map.get(s[i]) + 1, start)
    }
    // 取区间的不重复最大值，当前索引 - start +1， max 
    max = Math.max(i - start + 1, max)
    // 存值
    map.set(s[i], i)
  }
  return max
};