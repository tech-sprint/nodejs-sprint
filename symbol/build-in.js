// 参考 https://juejin.im/post/5a0e65c1f265da430702d6b9
// 内建Symbol
const assert = require('chai').assert

// Symbol.hasInstance: instanceof
class C1 {
  static [Symbol.hasInstance](obj) {
    return obj.type === 'type1'
  }
}

assert.isTrue({ type: 'type1' } instanceof C1)

// Symbol.iterator
class C2 {
  // [Symbol()] = 's1';
  constructor() {
    this.key1 = 'value1'
    this.key2 = 'value2'
    this[Symbol()] = 's1'
  }

  *[Symbol.iterator]() {
    const keys = Object.getOwnPropertyNames(this).concat(Object.getOwnPropertySymbols(this))
    for (const key of keys) {
      yield this[key]
    }
  }
}

const obj2 = new C2()
for (const o of obj2) {
  console.log(o)
}

// Symbol.isConcatSpreadable 返回值为true时，Array调用concat函数会压平数组（默认行为），否则直接连接。
class ArrayIsh extends Array {
  get [Symbol.isConcatSpreadable]() {
      return true;
  }
}
class Collection extends Array {
  get [Symbol.isConcatSpreadable]() {
      return false;
  }
}
arrayIshInstance = new ArrayIsh();
arrayIshInstance[0] = 3;
arrayIshInstance[1] = 4;
collectionInstance = new Collection();
collectionInstance[0] = 5;
collectionInstance[1] = 6;
spreadableTest = [1, 2].concat(arrayIshInstance).concat(collectionInstance);
console.log(spreadableTest)

// Symbol.unscopables  为了解决with关键字的历史遗留问题。

// Symbol.match  使用match函数时自定义匹配规则（不一定非得是正则对象），可以说正则对象也实现了的接口（函数）。
// 可重用的匹配规则类。
class MyMatcher {
  constructor(value) {
      this.value = value;
  }
  // 自定义匹配规则
  [Symbol.match](string) {
      var index = string.indexOf(this.value);
      if (index === -1) {
          return null;
      }
      return [this.value];
  }
}
var fooMatcher = 'foobar'.match(new MyMatcher('foo'));
var barMatcher = 'foobar'.match(new MyMatcher('bar'));
assert.deepEqual(fooMatcher, ['foo']);
assert.deepEqual(barMatcher, ['bar']);

// Symbol.replace，Symbol.search，Symbol.split类似于Symbol.match。

// Symbol.species，关联构造函数

// Symbol.toPrimitive， 转换为基本（原始）类型的函数，参数是要转换成的基本类型名，用于取代toString和valueOf的功能，并且拥有这两个函数的调用时机。

console.log('-- end --')
