function f1(...arg) {
    console.log(arg)
}

f1(3, '4')

function f2(p1 = 'default') {
    console.log(p1)
}

f2()
f2('222')

function f3({ p1 = 3, p2 = 'x' }) {
    console.log(p1)
    console.log(p2)
}

console.log('f3:')
// f3()  // 将会报错 `Cannot destructure property `p1` of 'undefined' or 'null'`
f3({})  // p1, p2 使用默认值，类似对象的解构语法。

function f3_1({ p1 = 3, p2 = 'x' } = {}) {
    console.log(p1)
    console.log(p2)
}
console.log('f3_1:')
f3_1()  // p1 默认值3，p2默认值x

function f3_2({ p1 = 3, p2 = 'x' } = { p1: 44 }, { p3 = 33, p4 = 'xx' }/* 只要传了这个位置参数，就按这个默认值来，即使传的不是对象*/ = { p3: 444 }, ...arg) {
    console.log(p1)
    console.log(p2)
    console.log(arg)
    console.log(p3)
    console.log(p4)
}
console.log('f3_2:')
f3_2()  // p1 默认值44，p2默认值x
f3_2({ p1: 4 })  // p1 值4，p2默认值x, arg 是空数组, p3是444
f3_2({ p1: 4 }, 1, 2, 3)  // p1 值4，p2默认值x, arg 是数组[2, 3]，p3是33
