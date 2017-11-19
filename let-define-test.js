'use strict'
bar(); //TypeError， 因为值为undefined

foo(); //ReferenceError

foo1();//无错, 声明的同时，并赋值了函数的引用

function foo1(){
	console.log(4);
}

var bar = function foo(){//函数表达式, foo属于函数内部作用域
	console.log(a);
	let a = 3;
}

foo();//foo is not defined
