/**
 * 变量和函数提升
 */
foo()  // y 变量定义提升。。。y为undefined（为赋值）。
// 结果
// undefined
// undefined
// 4

var y = 5
var x = 6
function foo() {
  console.log(y)  // 外部变量y
  console.log(x)  // 这个函数中的x，变量定义提升后还没有赋值，所以为undefined
  var x = 4
  console.log(x)
}

foo()
// 结果
// 5
// undefined
// 4

console.log('--- 1 ---')

// f()
var a = 5
var b = 6
var f = function () {
  console.log(a)
  console.log(b)
  var b = 4
  console.log(b)
}


console.log('--- 2 ---')

var z = 5
var bar = () => {
  console.log(z)
  var z = 4
  console.log(z)
}

bar()
