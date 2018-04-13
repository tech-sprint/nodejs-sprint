const [a, b, ...rest] = [10, 20, 30, 40, 50]

// console.log(a, b, rest)

function f ({ a=4, b=8 }) {
  console.log(a, b)
}

// f({a: 5})

var o1 = {
  a: 4,
  b: 5
}

var o = {
  x: 6,
  ...o1
}

console.log(o)