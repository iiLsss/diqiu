
function bubble(arr) {
  let n = arr.length
  for (let i = n - 1; i > 0; i-- ) {
    let swapped = false;  // 添加标志
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        swapped = true;  // 添加标志
      }
    }
    if (!swapped) break; 
  }
  return arr;  // 返回排序后的数组
}

let arr = [10, 3, 2, 5, 4, 1]
bubble(arr)
console.log(arr);