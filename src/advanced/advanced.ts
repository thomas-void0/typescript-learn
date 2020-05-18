namespace Advanced{
    // 接口的兼容性，适用于鸭式辩型法
    interface X {
        a:any;
        b:any;
    }

    interface Y {
        a:any;
        b:any;
        c:any;
    }

    let x:X = {a:1,b:2}
    let y:Y = {a:1,b:2,c:3}

    x = y; //X 可以兼容 Y 个数少的兼容个数多的

    interface X1{
        a:string,
        b:number
    }

    interface Y1{
        a:number,
        b:string,
        c:boolean
    }

    let x1:X1 = {a:'hhe',b:1}
    let y1:Y1 = {a:2,b:"hh",c:true}

    // x1 = y1; 必须要属性的类型相同才能进行兼容

    // 函数的兼容性
    // 1,函数参数多的兼容函数参数少的（这里和接口恰好是相反的）
    let f1 = (x:number,b:number)=>{}
    let f2 = (x:number,b:number,c:boolean)=>{}

    // f1 = f2;
    f2 = f1;

    // 函数的参数是对象的情况,将对象参数看成一个又一个的形参即可。也是个数多的兼容个数少的
    let f3 = (ArgsF3:X)=>{}
    let f4 = (ArgsF4:Y)=>{}

    // f3 = f4;
    f4 = f3;


    // 2.函数的返回值
    let f5 =()=>5;
    let f6 = ()=>7;
    let f7 = ()=>'str';

    f5 = f6;
    f6 = f5;
    // f5 = f7;

    let f8 = ()=>({name:'hehe',age:12});
    let f9 = ()=>({name:"haha"})

    // f8 = f9; 目标类型必须和源类型相同，或者是源类型的子类型。（这里实际上和接口是一样的，使用的是鸭式辩型法）
    f9 = f8;

    // 3. 函数的参数类型
    let f10 = (x:number) =>{}
    let f11 = (x:string) =>{}

    // f10 = f11 参数的类型必须相同

    // 4. 固定参数、可选参数、剩余参数
    let f12 = (x:number,b:number)=>{}
    let f13 = (x?:number,b?:number)=>{}
    let f14 = (...args:number[])=>{}

    f12 = f13
    f12 = f14

    // f13 = f12
    // f13 = f14

    f14 = f12
    f14 = f13
    
    // 固定参数可以兼容可选和剩余
    //可选参数不可兼容固定和剩余
    //剩余参数可以兼容固定和可选
    //如果要都互相兼容，那么必须在tsconfig.json中设置staticFunctionTypes:false


    // 5. 函数重载
    // 目标函数
    function overload(a:number,b:number):number;
    function overload(a:string,b:string):string;
    //源函数
    function overload(a:any,b:any):any{

    }

    //在函数列表中的是目标函数，而函数定义则是源函数。
    

    // 枚举之间的兼容性
    // 两个枚举之间互不兼容.枚举和number类型兼容
    enum A{
        Red,
        Blue
    }

    enum B{
        Yellow,
        Orange
    }

    // A = B

    let a:A.Red = 1;
    let b:B.Yellow = 2;
    // a = b;

    let c:number = 1;
    c = A.Red;


    // 类之间的兼容性
    class Husa{
        constructor(name:string){}
        id:number = 1;
    }

    class Husa2{
        constructor(age:string){}
        id:number = 2;
    }

    // 两个类之间的兼容性,静态属性和构造函数不参与比较.
    let husa1 =Reflect.construct(Husa,[])
    let husa2 = Reflect.construct(Husa2,[])

    husa1 = husa2; //如果两个类的实例成员相同,那么他们的实例对象互相兼容

    class KaKa{
        constructor(){}
        private age:number = 23;
        id:number = 1
    }

    class KaKa2 extends KaKa{
        constructor(){
            super()
        }
    }

    let  ka1 = Reflect.construct(KaKa,[])
    let  ka2 = Reflect.construct(KaKa2,[])

    ka1 = ka2
    ka2 = ka1

    //如果类中包含了私有成员,那么这个时候只有子类的实例对象和父类的实例对象互相兼容. 

    // 关于泛型的兼容
    //1. 泛型接口的兼容性

    interface G1<T>{
        // value:T //当泛型接口中没有定义实际的属性值时，可以实现互相之间的兼容
    }

    let g1:G1<number> = {}
    let g2:G1<string> = {}

    g1 = g2;

    //2. 泛型函数
    let log1 = <T>(x:T):T=>{
        return x;
    }

    let log2 = <U>(x:U):U=>{
        return x;
    }

    log1 = log2
    // 当两个泛型函数相同并且没有被指定实际的类型的时候，它们互相兼容 
}





