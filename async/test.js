// reject调用，相当于throw一个异常。

function api_f(x) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      if (x == 2) {
        reject(x)
      } else {
        resolve(x)
      }
    }, 2000);
  });
}

async function ac_f() {
  // 
  console.log(await api_f(1));
  try {
    // 用 try...catch 自己处理reject调用
    console.log(await api_f(2));
  } catch (e) {
    console.log('e: ' + e)
  }
  // 没有自己处理reject调用，需要在外部处理
  console.log(await api_f(2))
  // 上一步有未处理的reject调用，程序进入异常处理，不会继续执行了。
  console.log(await api_f(1));
}

// 异步函数返回一个 Promise 是函数内部await调用的集合。
let x = ac_f()
console.log(x)
// then：当异步函数(ac_f)中的await全部执行完毕时回调，如果任意await的调用有未处理的reject调用就会触发catch的回调
x.then(data => console.log('x: ' + data)).catch(data => console.log('x: ' + data))
console.log('555')

