var person = function () {
    var name = 'weinee';
    return{
        getName : function() {
            return name;
        },
        setName : function(newName){
            name = newName;
        }
    }
}

p = new person();//new 关键字调用方法，分配内存
p1 = new person();
if(p !== p1){
    console.log(true);
}
console.log(p.getName());