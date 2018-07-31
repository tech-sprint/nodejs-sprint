var f = function () {
    var a = 'a';  // 私有
    this.b = 'b';  // this指代调用者
}
var f1 = new f();  // 会创建对象（分配内存），f1的值并非f函数的返回值，而是一个新建的对象。
console.log(f1.b);

//一下等同new
var f2 = {};
f.apply(f2);  // this关键字使用f2代替，相当于执行了f2.b = 'b';的代码所以对象f2中又b属性，没有a属性。
console.log(f2.b);
