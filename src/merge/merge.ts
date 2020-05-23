interface A{
    x:number;
    // y:string
    foo(bar:number):number;//5
    foo(bar:'a'):number; //2 
}
interface A{
    y:number;
    foo(bar:string):string; //3 
    foo(bar:number[]):number[];//4
    foo(bar:'b'):number; //1
}
let sa:A={
    x:1,
    y:1,
    foo(bar:any){
        return bar;
    }
}

// 函数重载的顺序 内部按照书写顺序。全局同名接口就是最下面的接口的函数定义放到最前面，如果是字面量类型的定义则是会提升到最顶端


// 一定要放在命名空间之前 ,枚举是没有要求的
// 命名空间和函数的合并,相当于给这个函数添加了一个属性
function Lib(){}
namespace Lib{
    export let version = '1.0'
}

// 和类的合并, 相当于添加了一个静态成员
class H{}
namespace H{
    export let name = "H"
}

// 和枚举的合并,相当于给枚举添加了一个方法。这里不需要分辨先后的书写顺序。
enum H2{
    job,
    age
}
namespace H2{
    export function hh(){
        console.log("hh")
    }
}