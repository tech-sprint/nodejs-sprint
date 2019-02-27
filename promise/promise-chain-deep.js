/**
 * 一个更加深入的例子, 分别注释 resole 和 reject 观察输出结果。
 */
function api1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        code: 200,
        data: 'api1 success'
      })
    }, 1000);
    // setTimeout(() => {
    //   reject('api1 error')
    // }, 1000);
  })
}


function api2() {
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
    //   resolve({
    //     code: 200,
    //     data: 'api2 success'
    //   })
    // }, 1000);
    setTimeout(() => {
      reject('api2 error')
    }, 1000);
  })
}

const p = api1()
.then(data => {
  console.log(1, data)
  const p2 = api2()
  .then(data => {
    console.log(2, data)
    return 'then 2'
  }).catch(e => {
    console.log(3, e)
    return Promise.reject(e)
  })
  return p2
})
// 如果 api1 进入 fulfilled 状态，则下面的 catch 相当于 p2.catch()
.catch(e => {
  console.log(4, e)
  return 'catch 4'
})

// p 会根据 api1 和 api2 的不同状态有所不同。
p.then(data => {
  console.log(5, data)
})
