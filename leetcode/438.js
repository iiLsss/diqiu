// 438. 找到字符串中所有字母异位词

// 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

// 异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。

 

// 示例 1:

// 输入: s = "cbaebabacd", p = "abc"
// 输出: [0,6]
// 解释:
// 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
// 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
//  示例 2:

// 输入: s = "abab", p = "ab"
// 输出: [0,1,2]
// 解释:
// 起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
// 起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
// 起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。
 

// 提示:

// 1 <= s.length, p.length <= 3 * 104
// s 和 p 仅包含小写字母

function findAnagrams(s, p) {
  const pMap = new Map()
  const windowMap = new Map()
  let left = 0
  let right = 0
  let match = 0
  const result = [];
  for (let i = 0; i < p.length; i++) {
    pMap.set(p[i], (pMap.get(p[i]) || 0) + 1)
  }

  while(right < s.length) {
    const char = s[right]
    windowMap.set(char, (windowMap.get(char) || 0 ) + 1)
    if (pMap.has(char) && pMap.get(char) === windowMap.get(char)) {
      match++
    }
    if (match === pMap.size) {
      result.push(left)
    }
    if (right - left + 1 === p.length) {
      const charToRemove = s[left]
      if (pMap.has(charToRemove) && pMap.get(charToRemove) === windowMap.get(charToRemove)) {
        match--
      }
      windowMap.set(charToRemove,  windowMap.get(charToRemove) - 1)
      if (windowMap.get(charToRemove) === 0) {
        windowMap.delete(charToRemove);
      }
      left++
    }
    right++
  }
  return result

}

// 示例测试
const s1 = "cbaebabacd";
const p1 = "abc";
console.log(findAnagrams(s1, p1)); // 输出: [0, 6]

const s2 = "abab";
const p2 = "ab";
console.log(findAnagrams(s2, p2)); // 输出: [0, 1, 2]


/**

  1.初始化两个哈希表：pMap 和 windowMap，用于存储字符串 p 中每个字符的出现次数和当前滑动窗口中每个字符的出现次数。
  2.遍历字符串 p，将每个字符及其出现次数存储到 pMap 中。
  3.初始化滑动窗口的左右指针 left 和 right，以及匹配的字符数 match。
  4.遍历字符串 s，通过右指针 right 不断扩展滑动窗口：
      将右指针指向的字符及其出现次数存储到 windowMap 中。
      如果当前字符在 pMap 中存在，并且在 windowMap 中的出现次数与 pMap 中的出现次数相同，则增加 match 的值。
      如果 match 的值等于 pMap 的大小，则表示当前滑动窗口是 p 的异位词，将左指针的索引加入结果列表。
  5.当滑动窗口的大小等于 p 的长度时，需要收缩滑动窗口：
      将左指针指向的字符从 windowMap 中移除。
      如果当前字符在 pMap 中存在，并且在 windowMap 中的出现次数比 pMap 中的出现次数少 1，则减少 match 的值。
  6.返回结果列表
 */
function findAnagrams(s, p) {
  const pMap = new Map();
  const windowMap = new Map();
  let left = 0;
  let right = 0;
  let match = 0;
  const result = [];

  // 构建 p 的字符频率哈希表
  for (let i = 0; i < p.length; i++) {
    pMap.set(p[i], (pMap.get(p[i]) || 0) + 1);
  }

  while (right < s.length) {
    // 扩展窗口
    const char = s[right];
    windowMap.set(char, (windowMap.get(char) || 0) + 1);
    if (pMap.has(char) && windowMap.get(char) === pMap.get(char)) {
      match++;
    }

    // 检查窗口是否为异位词
    if (match === pMap.size) {
      result.push(left);
    }

    // 收缩窗口
    if (right - left + 1 === p.length) {
      const charToRemove = s[left];
      if (pMap.has(charToRemove) && windowMap.get(charToRemove) === pMap.get(charToRemove)) {
        match--;
      }
      windowMap.set(charToRemove, windowMap.get(charToRemove) - 1);
      if (windowMap.get(charToRemove) === 0) {
        windowMap.delete(charToRemove);
      }
      left++;
    }

    right++;
  }

  return result;
}