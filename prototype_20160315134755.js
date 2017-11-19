function test(){
	this.x = 'x';
}

test.prototype = {a: 'a', b: 'b'};

var t = new test();

// t.__proto__ = {c: 'c'};

// for(var i in t){
// 	console.log(t[i]);
// }

var arr = ['a', 'b'];
arr.forEach(function(value, index, array){
	console.log(value);
});
//重写数组的forEach方法
Array.prototype.forEach= function(cb){
	cb('x', 0, ['b', 'c']);
};
//或者
// arr.__proto__.forEach = function(cb){
// 	cb('x', 0, ['b', 'c']);
// };

arr.forEach(function(value, index, array){
	console.log(value);
});

console.log(t['a']);

// console.log(t.a);