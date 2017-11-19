//引入本地安装的包, 相当于导入头文件
var http = require('http');
var url = require('url');
var util = require('util');
var querystring = require('querystring');

http.createServer(function (request, response) {

	// 发送 HTTP 头部 
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});
	//返回值为json格式的字符串, 即将json对象转换成字符串
	var req = util.inspect(url.parse(request.url, true).query.i);
	//返回值为json对象
	/*{
	  protocol: null,
	  slashes: null,
	  auth: null,
	  host: null,
	  port: null,
	  hostname: null,
	  hash: null,
	  search: '?a=1',
	  query: { a: '1' },
	  pathname: '/weinee',
	  path: '/weinee?a=1',
	  href: '/weinee?a=1' }*/
	var req2 = url.parse(request.url, true);
	// 发送响应数据 "Hello World"
	response.end('Hello World\n' + req/* '1' */ + '\n' + req2.query.i.e/* 1 */ + '\n' +request.url);
}).listen(8881);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8881/');

