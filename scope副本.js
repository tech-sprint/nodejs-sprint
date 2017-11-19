var a = 2;
function fun1(){
	console.log(b);
	// var b = 3;
	// var a = 5;
	function fun2(){
		console.log(c);
	}
	fun2();
	var c = 4;
	fun2();
}
var b = 6;
var x;
console.log(x+'123');
// console.log('3');
fun1();