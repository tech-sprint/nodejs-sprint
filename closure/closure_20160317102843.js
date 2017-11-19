//this in closure
// 'use strict';
// var name = 'globle1';
// var obj = {
// 	name: 'obj',
//  	func: function outter(){
// 		return function inner(){
// 			console.log(this);
// 		};
// 	}
// };
// obj.func()();
// // console.log(global);
// // func1 = obj.func();
// // func1();

// Make a function that returns a closure function.
global.name = 'nnnnnnn';
function myModule() {
  var name = "tim", age = 28;
  return function greet() {
    return this['name'];
  }
}
// call `myModule` to get a closure out of it.
var greeter = myModule();
// Call the closure
console.log(greeter());