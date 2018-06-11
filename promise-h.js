function ac() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({nama: 333})
    }, 1000);
  })
}

ac().then(data => {
  console.log(data)
})
///
console.log('---end---')