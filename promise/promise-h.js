function ac() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({nama: 333})
    }, 1000);
  })
}

const axio = {
  get(url, params) {
    console.log(url, params)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const n = Math.random()
        if (n < 0.5) {
          resolve({
            name: n
          })
        } else {
          reject(new Error(n))
        }
      }, 500);
    })
  }
}

const result = axio.get('/user/3', {})

async function a1() {
  try {
    const data = await result
    console.log(1, data)
  } catch (ex) {
    console.log(2, ex)
  }
  return 88
}

console.log(4444)

// const p1 = Promise.resolve(Promise.reject())
// console.warn(p1)
// p1.then(d => {
//   console.log(2, d)
// }).catch(e => {
//   console.log(4, e)
// })

// console.warn(result)
// result.then(data => {
//   console.log(1, data)
//   // Promise.resolve(...)
// }).then(data => {
//   console.log(2, data)  //
// }).catch(err => {
//   console.log(3, err)
// }).then(data => {
//   console.log(4, data)
// })




// ac().then(data => {
//   console.log(data)
// })
///
console.log('---end---')
