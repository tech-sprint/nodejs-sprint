// 使用new关键字，会创建新的对象。详情见 ./new-this.js
var d = new Date()  // 创建一个当前时间的，时间对象。
console.log(typeof d)  // object

var dd = Date()
console.log(typeof dd)  // string


/**
 * js 只有基本类型和对象类型(Object)两种数据类型，两大类，七小类。
 * A primitive value is a member of one of the following built-in types: Undefined, Null, Boolean, Number, String, and Symbol.
 * Boolean，Number，String，都有其对应的对象类型(也是对应对象的构造函数)。有自动装箱和拆箱的操作。
 *
 * Each constructor is a function that has a property named "prototype" that is used to implement prototype-based inheritance and shared properties.
 * 像Boolean，Number，String，Object等都是函数（构造），有一个prototype属性，用来实现基于原型的继承和分享属性。
 * 需要使用 new 来调用这样的构造函数，new调用构造函数会忽略返回值。
*/
// Number, 不使用new
console.log(typeof Number())  // number  ，不用new调用，返回构造函数的实际返回值。
console.log(typeof new Number())  // object，new调用构造函数会忽略构造函数的实际返回值，因为永远返回的都是一个对象。

// Function: member of the Object type that may be invoked as a subroutine.
// Function, 是可以被调用的对象，不是基本类型。以下都输出 function。
console.log(typeof Function())
console.log(typeof new Function())
