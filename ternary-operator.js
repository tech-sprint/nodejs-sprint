//三目运算符结合方向和优先级
var a = 1;
var b = 2;
var c = 0;
c = true ? false ? 'd' : 'y' : b = 4;
console.log(a);
console.log(b);
console.log(c);