/**
 * 给数字加上千分位
 */

exports.comdify = function (n) {
    var re = /\d{1,3}(?=(\d{3})+$)/g;
    var n1 = n.replace(/^(\d+)((\.\d*)?)$/, function (s, s1, s2) { return s1.replace(re, "$&,") + s2; });
    return n1;
}

exports.toThousands = function (num) {
    var result = '', counter = 0;
    num = (num || 0).toString();
    var nums = num.split(".");
    var moy = 0;
    if (nums.length > 1) {
        moy = nums[0];
        for (var i = moy.length - 1; i >= 0; i--) {
            counter++;
            result = moy.charAt(i) + result;
            if (!(counter % 3) && i != 0) { result = ',' + result; }
        }
        result = result + "." + nums[1];
    } else {
        moy = nums[0];
        for (var i = moy.length - 1; i >= 0; i--) {
            counter++;
            result = moy.charAt(i) + result;
            if (!(counter % 3) && i != 0) { result = ',' + result; }
        }
    }

    return result;
}
