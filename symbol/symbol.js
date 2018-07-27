// symbol 给js增加了一定程度的元编程能力。
// Symbol 是 实现了的反射（Reflection within implementation）—— 你将 Symbols 应用到你已有的类和对象上去改变它们的行为。

const assert = require('chai').assert

// 唯一性, 始终唯一
const s1 = Symbol()
const s2 = Symbol()
const s3 = Symbol('foo')
const s3_1 = Symbol('foo')
assert.notEqual(s1, s2)
assert.notEqual(s3, s3_1)

// 全局注册中心，可以根据key获取相同的 Symbol。
const ss1_1 = Symbol('bar')
const ss1_2 = Symbol.for('bar')
assert.notEqual(ss1_1, ss1_2)

const ss1_3 = Symbol.for('bar')
assert.equal(ss1_2, ss1_3)

// 判断Symbol是否存在于全局注册中心
assert.isTrue(Symbol.keyFor(ss1_1) === undefined)
assert.isTrue(Symbol.keyFor(ss1_2) === 'bar')  // 不是undefined则存在于全局注册中心。
