
function insertion(arr) {
  let len = arr.length
  for (let i = 1; i < len; i++) {
    let base = arr[i]
    let j = i - 1
    while(j >= 0 && arr[j] > base) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = base
  }
}
let arr = [10, 3, 2, 5, 4, 1]
insertion(arr)
console.log(arr);