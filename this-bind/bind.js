// 参考 极客时间 重学前端专栏，第18篇。

// 函数的 [[Environment]] 私有属性，保存函数的执行上下文(栈)，在函数的用的时候，把记录在外层的词法环境(outer lexical environment)设置为函数的 [[Environment]].

// [[thisMode]] 有三个取值，lexical，global，strict。
// [[ThisBindingStatus]] 用来逐层查找(查找规则使用 [[thisMode]] 定义的方式) this 的值。

function foo() {
  console.log(this)
}

const foo1 = foo.bind({ a: 1 })
const foo2 = foo1.bind({ a: 2 })  // foo1 是 bind 产生的函数，不能再次 bind

console.log(foo1 === foo)  // false
console.log(foo1 === foo2)  // false

const foo3 = foo.bind({ a: 3 })  // foo 可以再次 bind
console.log(foo3 === foo2)  // false

foo1()
foo2()
foo3()
