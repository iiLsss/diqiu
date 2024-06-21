const key1 = Symbol('key')
const key2 = Symbol('key')

console.log(key1 === key2) // false

const obj = {
  [key1]: 'value1',
  [key2]: 'value2'
}
console.log(obj[key1] === obj[key2]) // false  

console.dir(Symbol)