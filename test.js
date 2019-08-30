const a = new Array(64 * 1024);
console.time('1');
for(var i = 0; i < a.length; i++) { a[i] *= 3 }
console.timeEnd('1');
console.time('2');
for(var i = 0; i < a.length; i+=16) { a[i] *= 3 }
console.timeEnd('2');
