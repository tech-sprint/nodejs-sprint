function f1() {
  console.log('start f1')
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('1: f1')
      resolve('f1')
    }, 2000);
  })
}

function f2() {
  console.log('start f2')
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('2: f2')
      resolve('f2')
    }, 4000);
  })
}

Promise.resolve(3)
  .finally(f2)
  .finally(f1)
  .then(data => {
    console.log(data)
  })
