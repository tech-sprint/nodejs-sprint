// toString 和 toValue函数的调用时机和顺序
// **直接使用**对象时，但是解析器需要一个基本类型(Booble, Integer, String, undefined等)是，会调用对象的toString或者toValue方法。
// 不同的对象类型，toString和toValue的调用顺序不同，但是只要其中一个返回了基本类型（因为可以被重写），就会停止继续调用另一个，
// 两个都没有返回基本类型的话就会抛出错误。

function add () {
  console.log('进入add');
  var args = Array.prototype.slice.call(arguments);

  var fn = function () {
      var arg_fn = Array.prototype.slice.call(arguments);
      console.log('调用fn');
      args = args.concat(arg_fn)
      return fn;
  }

  fn.valueOf = function () {
      console.log('调用valueOf');
      return args.reduce(function(a, b) {
          return a + b;
      })
  }

  return fn;
}

// 方法二
var args = [];

var add2 = function () {
    args = args.concat(Array.prototype.slice.call(arguments))
    return add2;
}

add2.valueOf = function () {
    return args.reduce(function(a, b) {
        return a + b;
    })
}

console.log(add2(1)(2)(3, 4, 5))
