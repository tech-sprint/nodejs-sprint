Array.prototype.sort = function(sortFunc){
    console.log('my sort');
    // 冒泡排序
    var arr = this.map(function(e) {return e});
    var length = arr.length;
    for(var i=0; i<length; i++){
        for(var j=1; j<length-i; j++){
            if(sortFunc(arr[j-1], arr[j])) {
                var t = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = t;
            }
        }
    }
    return arr;
}

// var arr = [4, 56, 11, 3, 100];
var arr = [{
    name: "weineel1",
    age: 25
}, {
    name: "weineel2",
    age: 20
}, {
    name: "weineel3",
    age: 5
}, {
    name: "weineel4",
    age: 33
}, {
    name: "weineel5",
    age: 1
}];
sortArr = arr.sort(function(a, b){
    return a.age > b.age;
});
sortArr.forEach(function(e){
    console.log("name: " + e.name + ", age: " + e.age);
});

