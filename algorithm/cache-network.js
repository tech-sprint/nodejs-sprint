/**
 * callApi是一 个请求后端API的函数， 返回一-个Promise。实际后端API响应时间比较长，我们希望当两个请求完全一致的时候， 当第- -个请求还没有结束时，第二个请求不再真实往后端请求API,而是直接复用第一个请求的结果，请设计实现这个函数newCallApi。
 */

function callApi(params) {
  return new Promise((resolve, reject) => {
    console.log('real network request.', `with params: ${getHash(params)}`)
    setTimeout(() => {
      resolve(`api result with params: ${getHash(params)}`)
    }, 1000)
  })
}

function getHash(value) {
  return JSON.stringify(value)
}

function newCallApiFactory() {
  const paramsPromiseList = {}  // key 是 params 的 hash 值
  return function(params) {
    const pHash = getHash(params)
    if (!paramsPromiseList[pHash]) {
      paramsPromiseList[pHash] = callApi(params)
    }
    paramsPromiseList[pHash].finally(() => {
      delete paramsPromiseList[pHash]
    })
    return paramsPromiseList[pHash]
  }
}

const newCallApi = newCallApiFactory()

newCallApi('aaaaa').then(console.log)
newCallApi('aaaaa').then(console.log)
newCallApi('bbbbb').then(console.log)
newCallApi('bbbbb').then((r) => {
  console.log(r)
  newCallApi('aaaaa').then(console.log)
  newCallApi('bbbbb').then(console.log)
})
newCallApi('ccccc').then(console.log)
newCallApi('ccccc').then(console.log)
newCallApi('ccccc').then(console.log)
newCallApi({a: '2'}).then(console.log)
newCallApi({a: '2'}).then(console.log)
newCallApi({b: '3'}).then(console.log)
newCallApi({a: '4'}).then(console.log)
