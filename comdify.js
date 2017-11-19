/**
 * 给数字加上千分位
 */

 exports.comdify = function(n) {
    var re = /\d{1,3}(?=(\d{3})+$)/g;
    var n1 = n.replace(/^(\d+)((\.\d+)?)$/, function(s, s1, s2) {return s1.replace(re, "$&,") + s2;});
    return n1;
 }
