Array.prototype.slice = function(){
    console.log('slice');
}//对数组原型进行更改。
Array.prototype.remove = function (a, b) {
    console.log(this);
}//对数组原型进行扩展。
Array.slice = function () {
    console.log('slice 1');
}//Array 被解释为普通变量。
Array.slice();

var arr = Array();
var arr1 = Array(10);//长度为10的数组
var arr2 = Array(1, 2);//长度为2的数组
arr.slice();
arr2.sort(function (a, b) {
    return 1;//返回值大于0时，交换顺序。
});
console.log(arr2);

arr[2] = '2';//数组长度为3；
arr[1] = '1';
arr['name'] = 'weinee';//通过字符串进行赋值，则数组被解释为普通对象，字符串下标解释为属性，不会对length做出改变，length是可读可写属性。
arr['age'] = 23;
console.log(arr.length);
console.log(arr.name);
for(var key in arr){//for in循环会遍历到对数组原型的扩展，导致不期望的异常，用一般循环遍历数组来解决。
    console.log(arr[key]);
}