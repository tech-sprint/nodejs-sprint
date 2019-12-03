// exports 是指向 module.exports 的引用，给 module.exports 赋值会导致 exports 失效。
module.exports = {
  a: '33',
  b: '44',
}

exports.yy = 88
