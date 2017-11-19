function Class10()  
{  
    this.showSub = function(a,b)  
    {  
        console.log(a-b);  
    }  
}  
  
function Class11()  
{  
    this.showAdd = function(a,b)  
    {  
        console.log(a+b);  
    }  
}  
  
function Class2()  
{  
    Class10.call(this);  //使用this调用Class10方法；this.showSub
    Class11.call(this);  
}  

var class2 = new Class2();
class2.showAdd(3, 4); //
class2.showSub(3, 4);