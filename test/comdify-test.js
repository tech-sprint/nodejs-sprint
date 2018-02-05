// import { comdify } from '../comdify'
// import { assert } from 'chai'
var comdify = require('../comdify').comdify
var assert = require('chai').assert


describe('把数字字符串改写成千分位', () => {
    it('123改写为千分为', () => {
        let v = '123'
        assert.equal(comdify(v), v)
    })
    it('1234改写为千分为', () => {
        let v = '1234'
        assert.equal(comdify(v), '1,234')
    })
    it('123456改写为千分为', () => {
        let v = '123456'
        assert.equal(comdify(v), '123,456')
    })
    it('1234567改写为千分为', () => {
        let v = '1234567'
        assert.equal(comdify(v), '1,234,567')
    })
    it('12345.67改写为千分为', () => {
        let v = '12345.67'
        assert.equal(comdify(v), '12,345.67')
    })
})
