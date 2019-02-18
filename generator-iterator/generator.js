// 参考 https://juejin.im/post/5b471770e51d45195604fe26

// 在生成器函数里， yield* 就是针对一个可迭代对象，把它的每一项逐个地 yield 出来。

/**
 * 生成器对象
 */
// 1. [Symbol.iterator](): 生成器函数的返回值是生成器对象，生成器对象实现了 [Symbol.iterator] 函数，所以是可迭代的，[Symbol.iterator] 函数返回迭代器（实现了 next 函数的对象，next 函数的返回值为{value, done}）。
// 2. next(input?): 调用生成器对象的 next 函数时可以传参，相当于上一个 yield 的返回值，因为在生成器中，yield 表达式可以作为赋值的右值。
// 3. return(value): 传入结果，并强制停止生成器。{ value: value, done: true }
// 2. throw(err): 如果生成器函数没开始运行，则等同于原地 throw；否则，在生成器函数体当前 yield 停顿的位置 throw 一个异常，然后继续运行，直到遇到 yield 、 return 或者未被捕获的异常

function *g() {
  const a1 = yield 'a'  // yield 的结果为调用next函数时传入的值。
  console.log('g:', a1);
  const a2 = yield 'b'
  console.log('g:', a2);
  const a3 = yield 'c'
  console.log('g:', a3);
}

const i = g();
// 第一次调用next，yield出一个值，然后函数暂停，弟2行代码并未执行结束，对a1赋值并未执行。yield 的返回值为下一次next函数调用传入的值。
console.log(i.next('a1').value)  // 只打印出 a
console.log(i.next('a2').value)  // 先打印出g: a1，然后打印出b
console.log(i.next('a3'))
console.log(i.next())

console.warn('-- -- --')

// fibonacci 数列
function *fibonacci() {
  let a = 0;
  let b = 1;
  while(true) {
    let current = a;
    a = b;
    b = current + a;
    const reset = yield current;
    if (reset) {
      a = 0;
      b = 1;
    }
  }
}
var sequence = fibonacci();
console.log(sequence.next().value);     // 0
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 2
console.log(sequence.next().value);     // 3
console.log(sequence.next().value);     // 5
console.log(sequence.next().value);     // 8

// 异常处理
function* test(){
  try {
    console.log("inner: Hello")
    console.log("inner: GET" + (yield "output1"))
  } catch (err) {
    console.log("inner: Caught", err)
  }
  console.log("inner: Done")
  return "output 2"
}

var g = test()
console.log("outer: next: ", g.next("input 1"))  // 生成器刚启动 next 传参是无效的。
console.log("outer: throw: ", g.throw("err"))
console.log("outer: next: ", g.next("input 2"))

/** 结果 */
// inner: Hello
// outer: next:  { value: 'output1', done: false }
// inner: Caught err
// inner: Done
// outer: throw:  { value: 'output 2', done: true }
// outer: next:  { value: undefined, done: true }

// 作者：laobubu
// 链接：https://juejin.im/post/5b471770e51d45195604fe26
// 来源：掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。