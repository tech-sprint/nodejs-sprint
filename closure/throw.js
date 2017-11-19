function foo(){
	try{
		throw 4;//throw会直接结束try代码块，不会结束这个方法
		console.log('---');
		throw 3;//抛出一个对象
	} catch (a){ //捕获在try中抛出的对象
		console.log(a);// 4
	}
	console.log('function end');//会执行
}

function wei(){
	throw 2;
}

function bar(){
	try{
		foo();//被处理的throw不会再次被捕获
		wei();//捕获未被处理的throw
		console.log('---bar');
	}catch(b){
		console.log(b);// 2
	}
}

bar();

var e = {
	a: '这是一个没有被捕获的异常',
	toString: function (){
		console.log(this.a);
	}
};


throw e;//没有被捕获的异常将会被打印(调用被抛出对象的toString方法)出来

console.log('end');

