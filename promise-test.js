var fs = require('fs');
var Promise = require('bluebird');
var fs1 = Promise.promisifyAll(require('fs'));

fs.readFile('./weinee.txt', function(error, data){
	if (error) {
		return console.error(error);
	}
	console.log('1.' + data.toString());
});

fs1.readFileAsync('./weinee1.txt').then(function(data){
	console.log('2.' + data.toString());
	//此返回值作为下一个then回调函数的参数。
	return '222222';
})
.then(function(data){
	console.log(data);
})
.catch(TypeError, function(e){//发生异常时会重第一个catch开始向下匹配异常
	console.log('异常1：' + e.message);
})
.catch(function(e){
	console.log('异常2：' + e.message);
});


	var x = 1;
　　function test(){
　　　　this.x = 0;
　　}
　　test();
　　console.log('x=' + x + '\nthis.x=' + this.x); //0

	function test(){
　　　　console.log('内部this.x=' + this.x);
　　}
　　var o = {};//定义一个对象
　　o.x = 1;
　　o.m = test;
　　o.m(); // 1

console.log('end!');