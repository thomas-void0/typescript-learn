// 泛型 不预先定义类型，等到调用时再确定类型
function log<T>(value:T):T{
    console.log(value)
    return value;
}

log<string[]>(['a','b'])
log(['a','b']) //使用ts类型推断的方式

// 使用类型别名的方式
type Log = <T>(value:T)=>T;
let fun1:Log = log;

// 使用泛型接口
interface Gxx{
    <T>(value:T):T
}

let gxx1:Gxx = function <T>(value:T):T{
    return value
}

// 所有的接口成员都是泛型
interface Gxx2<T>{
    (value:T):T,
}

let gxx2:Gxx2<number> = function (value:number):number{
    return value;
}

// 泛型类
class Log2<T>{
    run(value:T){
        console.log(value)
        return value;
    }
}

let log1 = new Log2<number>();
log1.run(1)
let log2 = new Log2();
log2.run(2)

// 泛型类
class Husa12<T>{
    run(value:T){
        console.log(value)
        return value
    }
}
let log12 = new Husa12<number>()
log12.run(1)

// 泛型约束,泛型函数继承了一个接口。这个泛型就不能再随意指定类型了，传入的值必须具有length属性
interface Length{
    length:number
}
function genf<T extends Length>(value:T):T{
    console.log(value,value.length)
    return value
}
genf([1])
genf('123')
genf<string>('233')