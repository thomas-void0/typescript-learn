// 原始类型
let bool:boolean = true;
let num:number = 123;
let str:string = 'abc';

// 数组
let arr1:number[] = [1,2,3]
let arr2:Array<number> = [1,2,3]
let arr3:Array<number | string> = [1,2,"dd"]

// 元组
let tuple:[number,string] = [1,"str"]
// 元组的越界问题,可以添加但是不可以访问
tuple.push(2)

// 函数,可以利用类型推断的方式不指定返回值
let add = (x:number,y:number):number=>x+y
let compute:(x:number,y:number)=>string
compute = (a:number,b:number)=>"str"

// 对象,
let obj:object = {x:1,y:2} //这里只是简单的定义了obj是一个对象类型，但是并没有说含有哪些属性。所以不能进行更改赋值
let obj1:{x:number,y:string} = {x:1,y:"str"}
obj1.x = 2

// symbol类型
let s1:symbol = Symbol()
let s2 = Symbol()

//undefined和null
let un:undefined = undefined;
let nu:null = null;

//void，在js中void是一种操作符。用于返回undefined，因为在js中undefined并不是一个保留字。也就是我们可以自定义覆盖全局的undefined。
// void 0就是我们最方便的返回undefined的写法。
let f1:(a:number,b:number)=>void;
f1 = (a:number,b:number)=>{};

//any,不建议使用，用了any类型ts就没有意义了
let x:any;

//never,表示永远不会有返回值的类型。比如一个函数抛出了异常，或者函数是一个死循环的情况。
let error = ():never=>{
    throw new Error("error")
}
let endless = ():never=>{
    while(true){}
}