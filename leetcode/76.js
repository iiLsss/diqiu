// 76. 最小覆盖子串

// 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

// 注意：

// 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
// 如果 s 中存在这样的子串，我们保证它是唯一的答案。


// 示例 1：

// 输入：s = "ADOBECODEBANC", t = "ABC"
// 输出："BANC"
// 解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。
// 示例 2：

// 输入：s = "a", t = "a"
// 输出："a"
// 解释：整个字符串 s 是最小覆盖子串。
// 示例 3:

// 输入: s = "a", t = "aa"
// 输出: ""
// 解释: t 中两个字符 'a' 均应包含在 s 的子串中，
// 因此没有符合条件的子字符串，返回空字符串。

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (t.length > s.length) return ''
  let targetMap = new Map()
  let windowMap = new Map()

  for (let i = 0; i < t.length; i++) {
    targetMap.set(t[i], (targetMap.has(t[i]) || 0) + 1)
  }

  let left = 0  // 左指针
  let right = 0  // 有指针
  let match = 0  //
  let minLength = Infinity
  let start = 0

  while (right < s.length) {
    const char = s[right]
    if (targetMap.has(char)) {
      windowMap.set(char, (windowMap.get(char) || 0) + 1);
      if (windowMap.get(char) === targetMap.get(char)) {
        match++;
      }
    }

    while (match === targetMap.size) {
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        start = left;
      }

      const charToRemove = s[left];
      if (targetMap.has(charToRemove)) {
        windowMap.set(charToRemove, windowMap.get(charToRemove) - 1);
        if (windowMap.get(charToRemove) < targetMap.get(charToRemove)) {
          match--;
        }
      }
      left++;
    }
    right++;
  }
  return minLength === Infinity ? "" : s.substring(start, minLength);

};




// 1.初始化两个哈希表 targetMap 和 windowMap，用于存储字符串 t 中字符的出现次数和当前窗口中字符的出现次数。
// 2.遍历字符串 t，将其中的字符及其出现次数存储到 targetMap 中。
// 3.初始化窗口的左右指针 left 和 right，以及变量 match 表示当前窗口中已匹配的字符个数。
// 4.初始化变量 minLength 表示最小覆盖子串的长度，以及变量 start 表示最小覆盖子串的起始位置。
// 5.移动右指针 right，扩展窗口，直到窗口中包含了字符串 t 中的所有字符。
//    如果当前字符 char 在 targetMap 中存在，更新 windowMap 中该字符的出现次数，并检查是否已经匹配了足够数量的该字符。
//    如果已经匹配了足够数量的字符，将 match 自增 1。
// 6.当窗口中包含了字符串 t 中的所有字符后，开始移动左指针 left 缩小窗口。
//    如果当前字符 char 在 targetMap 中存在，更新 windowMap 中该字符的出现次数，并检查是否不再匹配足够数量的该字符。
//    如果不再匹配足够数量的字符，将 match 自减 1。
//    在每次移动左指针 left 后，检查当前窗口的长度是否小于 minLength，如果是，则更新 minLength 和 start。
// 7.重复步骤 5 和 6，直到右指针 right 到达字符串 s 的末尾。
// 8.返回最小覆盖子串，即从 start 开始，长度为 minLength 的子串。


/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// var minWindow = function(s, t) {
//   let need = {}
//   let window = {}
//   for(let a of t) {
//       need[a] = (need[a] || 0) + 1
//   }
//   let left = 0
//   let right = 0

//   let valid = 0
//   let start = 0
//   let len = Number.MAX_VALUE

//   while(right < s.length) {
//       let c = s[right]
//       right++
//       if(need[c]) {
//           window[c] = (window[c] || 0) + 1
//           if (window[c] === need[c]) valid++
//       }
//       while(valid === Object.keys(need).length) {
//           if (right - left <len) {
//               start = left
//               len = right - left
//           }
//           let d = s[left]
//           left++
//           if (need[d]) {
//               if(window[d] === need[d]) valid--
//               window[d]--
//           }
//       }
//   }
//   return len === Number.MAX_VALUE ? '' : s.substr(start, len)
// };