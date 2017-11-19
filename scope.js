//作用域, 没有块作用域有词法作用域
var str = 'global';
{
    var str2 = 'global2';
    str = 'global1';
}
var obj = {name:'name1'};
function str1 (){//词法作用域， 在声明定义函数str1的时候预先声明了str变量。
    //var str;//仅仅是声明。
    console.log(str);//未定义
    //var str = 'local';//相当于在函数的开头有var str;进行声明，如果没有的话将会引用外部变量（作用域链）。
    console.log(str);
}
with (obj){//使用with语句扩展作用域链
    console.log(name);
}

console.log(str2);
str1.apply();


name="lwy";
function t(){
    var name="tlwy";
    function s(){
        var name="slwy";
        console.log(name);
    }
    function ss(){
        console.log(name);
    }
    s();
    ss();
}
t();
// 当执行s时，将创建函数s的执行环境(调用对象),并将该对象置于链表开头，然后将函数t的调用对象链接在之后，最后是全局对象。然后从链表开头寻找变量name,很明显
// name是"slwy"。
// 但执行ss()时，作用域链是： ss()->t()->window,所以name是”tlwy"
