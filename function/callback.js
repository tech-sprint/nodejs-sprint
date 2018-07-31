'use strict'

function f(cb) {
  console.log('xx');
  cb();
}

f(function() {
  console.log('yy');
});

console.log('aa')

function foo(p) {
  p.f1()  // p
  var f = p.f1
  f()  // undefined
  var f2 = p.f1.bind(f)
  f2() // f1
}
foo({
  x: 33,
  f1: function() {
    console.log(this)
  }
})
