'use strict'
//this 词法
/** 普通函数，this绑定*/
var obj1 = {
	name: 'name1',
	cool: function(){
		function foo(){
			console.log(this.name);
		}
//		foo();//this 丢失为undefined
	}
}
obj1.cool();

/** 普通函数，this绑定bind*/
var obj2 = {
	name: 'name2',
	cool: function(){
		function foo(a){
			console.log(a + '+' + this.name);
		}
		foo.bind(this, 'a')();// this为obj2 被绑定到foo中取代其中的this
	}
}
obj2.cool();

/** arrow函数，this词法*/
var obj3 = {
	name: 'name3',
	cool: function(){
		() => {
			console.log(this.name);
		}();//立即调用箭头函数
	}
}
obj3.cool();

/** 箭头函数的形式*/
var arrow1 = (a, b) => b;
console.log(arrow1(3, 4));// 4

var arrow2 = a => a+4;
console.log(arrow2(2));// 6

var arrow3 = (a, b) => {
		var c = a + b;
		return c;
	};
console.log(arrow3(1, 2));// 3




