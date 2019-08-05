// 统计数组中相同项的个数
// from https://mp.weixin.qq.com/s/oOgdbH87ovn1lDLfiSPJcg
var cars = ['BMW','Benz', 'Benz', 'Tesla', 'BMW', 'Toyota'];
var carsObj = cars.reduce(function (obj, name) {
  obj[name] = obj[name] ? obj[name] + 1 : 1;
  return obj;
}, {});
console.log(carsObj);
