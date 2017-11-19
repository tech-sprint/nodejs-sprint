
function f(cb) {
  console.log('xx');
  cb();
}

f(function() {
  console.log('yy');
});

console.log('aa')
