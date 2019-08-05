// 将数字四舍五入到指定的小数位数
// from https://mp.weixin.qq.com/s/oOgdbH87ovn1lDLfiSPJcg
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`)

console.log(round(1.2345))  // 1
console.log(round(1.2345, 1))  // 1.2
console.log(round(1.2345, 2))  // 1.23
console.log(round(1.2345, 3))  // 1.235
console.log(round(1.2345, 6))  // 1.2345
