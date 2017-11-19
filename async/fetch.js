// var math = require('math')

exports.fetchx = function() {
  var result = '';
  try {
    result = await fetch('x');
  } catch(e) {
    console.log(e); // no-x
  }
  console.log(result); // x
  return result;
}

// 异步操作
function fetch(x) {
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      if(Math.random() < 0.5) {
        resolve(x);
      } else {
        reject('no-' + x);
      }
    }, 3000);
  });
}
