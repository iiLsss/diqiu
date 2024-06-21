
// 最大的安全整数
const maxSafeInt = Number.MAX_SAFE_INTEGER
// 最小的安全整数
const minSafeInt = Number.MIN_SAFE_INTEGER
console.log(maxSafeInt) // 9007199254740991
console.log(minSafeInt) // 9007199254740991

// 超过最大安全整数 出现精度丢失问题
console.log(90071993871644243242) // 90071993871644250000

// BigInt 解决精度丢失问题

const bigInt = BigInt(maxSafeInt)
console.log(bigInt) // 9007199254740991n

const res = bigInt(90071993871644243242) + bigInt(12313)
console.log(res) // 90071993871644255555n
// 转为字符串用于数据传输
console.log(res.toString()) // 90071993871644255555

