// 

function selection(arr){
  for(let i = 0; i < arr.length; i++){
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++){
      if (arr[j] < arr[minIndex]){
        minIndex = j
      }
    }
    if (minIndex === i) continue
    let temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
    // [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
}

let arr = [10, 3, 2, 5, 4, 1]
selection(arr)
console.log(arr);