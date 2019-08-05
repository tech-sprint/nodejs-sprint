// 作者：singcl
// 链接：https://juejin.im/post/5a98ea2f6fb9a028bb186f34
// 来源：掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

/**
 * 16进制颜色值转RGB
 * @param  {String} hex 16进制颜色字符串
 * @return {String}     RGB颜色字符串
 */
function hexToRGB(hex) {
  var hexx = hex.replace('#', '0x')
  var r = hexx >> 16
  var g = hexx >> 8 & 0xff
  var b = hexx & 0xff
  return `rgb(${r}, ${g}, ${b})`
}

/**
* RGB颜色转16进制颜色
* @param  {String} rgb RGB进制颜色字符串
* @return {String}     16进制颜色字符串
*/
function RGBToHex(rgb) {
  var rgbArr = rgb.split(/[^\d]+/)
  var color = rgbArr[1]<<16 | rgbArr[2]<<8 | rgbArr[3]
  return '#'+ color.toString(16)
}
// -------------------------------------------------
console.log(hexToRGB('#ffffff'))               // 'rgb(255,255,255)'
console.log(RGBToHex('rgb(255,255,255)'))      // '#ffffff'
