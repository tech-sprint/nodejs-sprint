const shell = require('shelljs')

// 失去了交互
shell.exec('vue create test', err => {
  console.log(err)
})
