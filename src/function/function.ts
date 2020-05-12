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

// 剩余参数
function add7(x:number,...rest:Array<number>){
    return x + rest.reduce((pre,cur)=>pre+cur)
}

// 函数重载
// 要把最容易匹配到的函数定义放到最前面，因为ts会从头开始查找函数重载定义的列表。在最后要写一个最宽泛的函数。
function add8(...rest:number[]):number;
function add8(...rest:string[]):string;
function add8(...rest:any[]):any{
    let first = rest[0]
    if(typeof first === 'string'){
        return rest.join('');
    }
    if(typeof first === 'number'){
        return rest.reduce((pre,item)=>pre+item)
    }
}

console.log(add8('a','b','c'))
console.log(add8(1,2,3))

function add9(...rest:number[]):number;
function add9(...rest:string[]):string;
function add9(...rest:string[] | number[]){
    let first = rest[0];
    if(typeof first === 'number'){
        return (rest as number[] ).reduce((pre:number,item:number)=>pre+item)
    }
    if(typeof first === 'string'){
        return rest.join('');
    }
}

console.log(add9('a','b','c'))
console.log(add9(1,2,3))