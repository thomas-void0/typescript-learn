// 关于函数的定义
function f2(x:number,y:number){
    return x+y;
}

let f3:(x:number,y:number)=>number

//使用类型别名的方式
type f4 = (x:number,y:number)=>number

interface f5{
    (x:number,y:number):number
}

// 在ts中对函数的要求

// 1，在ts中形参和实参的个数必须一一对应。