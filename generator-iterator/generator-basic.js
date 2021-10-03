function * gen(x) {
  console.log(x, 3)
  const data = yield 'first'
  console.log(data, 0)
  return 'any'
}

const it = gen(44)

// 首次 next 传参也是无效的
const c = it.next(99)
console.log(c, 1)
// next 的传参是 yield 的返回值，作为下次的开始。
console.log(it.next(88), 2)
