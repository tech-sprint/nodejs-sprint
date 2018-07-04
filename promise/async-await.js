// async await 可以理解为promise的语法糖

function apis(p) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5)
        resolve({
          code: 0,
          data: p + '-resolve'
        })
      else {
        reject({
          code: -1,
          data: p + '-reject'
        })
      }
    }, 1000)
  })
}

// 函数执行时立即返回一个promise（padding），当执行到return时会resolved/rejected，resolved/rejected的结果为函数的返回值。
async function f_a() {
  let r = null
  try {
    r = await apis('rrr')
  } catch (ex) {
    console.error('error: ' + ex.code)
  }
  // 返回值默认使用Promise.resolve(r)继续向下传递。
  return r
  // 也可以直接返回一个promise，影响紧接着的promise调用链。
  // return Promise.reject(r)
}

const fa1 = f_a()

fa1.then(r => {
  console.log(r)
}).catch(ex => {
  console.error('error1: ' + ex)
})
