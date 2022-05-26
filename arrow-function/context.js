const foo = () => {
  var context = '9999'
  return () => {
    console.log(context)
  }
}

console.log(context)
