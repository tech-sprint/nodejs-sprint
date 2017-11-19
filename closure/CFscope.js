'use strict'
function foo(){
	console.log(a);
}

function bar(){
	var a = 2;
	foo.bind(this)();
}

var a = 3;

bar();// 3
