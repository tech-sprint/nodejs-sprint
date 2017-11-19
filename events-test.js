//弱类型语言

//事件(event)是个字符串，监听器(listener)是个处理事件函数
//采用的是观察者模式
//引入事件模块(对象)
var events = require('events');
//创建eventEmitter对象
var emitter = new events.EventEmitter();
//响应错误事件
emitter.on('error', function(err){
	console.log('111' + err);
});
emitter.emit('error');
//创建链接事件处理函数，函数也可以被生命成变量
function connectHandler(){
	//链接成功
	console.log('connection success!');
	//触发接受事件
	emitter.emit('received', 'weinee');
}
//绑定事件函数, 使用函数变量，代替匿名函数
//emitter.on('connection', connectHandler);
emitter.addListener('connection', connectHandler);//
//接受事件处理函数, 直接使用匿名函数作为回调函数
//接受开始
emitter.on('received', function(username){
	console.log('username is:' + username);
	console.log('received start');
});
//接受完成
emitter.on('received', function (){
	//接受数据
	console.log('received end!');
});

//触发事件
emitter.emit('connection');

// console.log(emitter.listeners('received').toString());
console.log(__filename);
console.log(__dirname);

console.log('end!');