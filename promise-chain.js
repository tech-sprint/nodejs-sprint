/**
 * Promise 链式调用
 */

/** new Promise((resolve, reject) => {}) 创建一个pending状态的 Promise, 
 * 通过回调 resolve 或 reject 突变Promise的状态，状态的突变会触发注册的then和catch回调。
 * */
const pp = new Promise((resolve, reject) => {
    // 内部调用 resolve 突变为 fulfilled 
    // 内部调用 reject 或者发生任意未捕获的异常，突变为rejected
    setTimeout(() => {
        resolve('pp resolve 1:')
        resolve('pp resolve 2:')  // 会被丢弃。。。
        reject(Error('pp reject 1'))
    }, 1000);
})
pp.then(data => {
    console.log(data)
    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('pp reject 2')
        }, 1000);
    })
    return p1
})
// 相当于 Promise.resolve(p1).then
.then(data => {
    console.log(data)
})
.catch(error => {
    console.error(error)
    // 返回一个 thenable 对象
    const thanableObj = {
        then(resolve, reject) {
            // 可以写异步代码。。。
            // reject(Error('3'))
            // 在resolve 之前抛出异常，rejected
            throw Error('3')
            resolve('3')
        }
    }
    return thanableObj
})
// 相当于 Promise.resolve(thanableObj).then
.then(data => {
    console.log('pp resolve 3: ' + data)
})
.catch(error => {
    console.error('pp reject 3: ' + error)
})

/** Promise.resolve() 和 Promise.reject() 直接创建一个settled(fulilled/rejected)状态的Promise */
/** 根据当前状态决定调用 then还是catch得回调函数 */
const p = Promise.resolve('xxx')  // p 初始状态为 fulfilled/resolved 和 new Promise() 创建的promise 初始状态为pending

// catch 和 then回调函数的返回值(returnValue), 
// 会用 Promise.resolve(returnValue) 包装作为then和catch函数的返回值，所以可以返回一个任意类型的值,
// 包括任意方式创建的Promise, 实现链式调用。

// Promise.resolve(returnValue) 的解释： 
// 通常而言，如果你不知道一个值是否是Promise对象，使用Promise.resolve(value) 来返回一个Promise对象,
// 这样就能将该value以Promise对象形式使用。

p.catch(error => {
  console.error('catch 1: ' + error)
})
.then(data => {
  console.log('then 1: ' + data)
  return Promise.resolve('data')
})
.then(data => {
  console.log('then 2: ' + data)
  return Promise.reject(Error('s'))
})
.catch(error => {
  console.error('catch 2: ' + error)
  return Promise.resolve('error')
})
.then(error => {
  console.error('then 3: ' + error)
})
.catch(error => {
  // 不会调用
  console.error('catch 3: ' + error)
})
.then(data => {
  // data 为undefined, 因为上一个被调用的then或catch的回调函数返回值是undefined(或没有return)
  console.log('then 4: ' + data)
})

p.then(data => {
  // p 还是原来的那个promise 所以data为 xxx
  console.log('p 2: ' + data)
})
