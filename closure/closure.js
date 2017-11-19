//this in closure
'use strict';
global.name = 'globle1';
//var name = 'globle1';//不能作为Global的属性了？
var obj = {
	name: 'obj',
 	func: function outter(){
		return function inner(){
			console.log(this);
		}
		 .bind(this)//创建绑定函数
		;
	}
};
obj.func()();
// console.log(global);
// func1 = obj.func();
// func1();

// Make a function that returns a closure function.
// var name = 'nnnnnnn';
// function myModule() {
//   var name = "tim", age = 28;
//   return function greet() {
//     return this[name];
//   }
// }
// // call `myModule` to get a closure out of it.
// var greeter = myModule();
// // Call the closure
// console.log(greeter());