// 迭代器: 实现了 next 函数的对象。

// 实现了 [Symbol.iterator] 函数的对象就是一个可迭代对象，可以使用 forof 遍历。

// [Symbol.iterator] 的返回值是一个实现了 next 函数的对象，next 的返回值是 {value: xx, done: true/false}, 这就是一个迭代器。

const e = {
  [Symbol.iterator]() {
    return {
      next() {
        const n = Math.random()
        return {
          value: n,
          done: n > .5
        }
      }
    }
  }
}

console.log('---- 1 ----')
for (const item of e) {
  console.log(item)
}

// 手动执行迭代器
console.log('---- 2 ----')

const e2 = {
  [Symbol.iterator]() {
    return {
      next() {
        const n = Math.random()
        return {
          value: n,
          done: n > .5
        }
      }
    }
  }
}
// 获取迭代器
const it = e2[Symbol.iterator]()
// 执行迭代器
let i = null
while(!(i = it.next()).done) {
  console.log(i.value)
}
