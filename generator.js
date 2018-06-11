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
