var fetch = require('./fetch');

var re = fetch.fetchx();
console.log(re); // Promise { <pending> }

re.then(function(re) {
  console.log('main: ' + re);
}).then(function(re) {
  console.log('main1: ' + re);
}).catch(function(e) {
  console.log('main: ' + e);
})
