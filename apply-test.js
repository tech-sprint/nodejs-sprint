	x = 0;//不适用var 定义的变量为Global对象的属性
　　function test(y, z){
		console.log(this.x + '\ny=' + y + 'z=' + z);
　　}
	var o1 = {x:2};
　　var o={};
　　o.x = 1;
　　o.m = test;
    o.m();
　　o.m.apply(o1, [3, 4]); //相当于o1对象（第一个参数）调用test方法，this代表o1; 当第一个参数为空时代表Global对象，且不能传参。
	o.m.call(o1, 3, 4); //o1调用text方法。
	o.m.call(null,3, 4);//第一个参数为null代表Global对象。