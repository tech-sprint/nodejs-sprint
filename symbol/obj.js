// symbol 作为对象的key

// 枚举性
const s1 = Symbol()
const s2 = Symbol()
const obj1 = {
  [s1]: 's1',
  [s2]: 's2',
  key1: 'value1'
}

const s3 = Symbol()
// 无法被for in或者Object.getOwnPropertyNames获取，但是可以被Object.assign复制。
Object.defineProperty(obj1, s3, {
  enumerable: true,  // 默认值
  value: 's3',
  writable: true
})

for (const i in obj1) {
  console.log(i, obj1[i])
}

// Symbol的属性只能被Object.getOwnPropertySymbols函数获取
console.log(Object.getOwnPropertySymbols(obj1))

console.log('-- end --')
