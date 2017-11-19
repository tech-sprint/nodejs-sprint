
//科里化
var outer = function (data) {
    return function (num) {
        return num + data;
    }
}
//分两次调用,第一次调用的参数也没有必要一定是常亮
var inc = outer(1);//inc为outer返回的内部函数，并且参数不确定，由于是调用outer（1）产生的所以有一个参数是确定的
//inc = function(num){return num + 1}
var dec = outer(-1);//dec = function(num){return num - 1}
console.log(inc(99));
console.log(dec(101));