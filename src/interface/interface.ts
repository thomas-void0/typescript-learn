interface List{
    id:number,
    name:string,
    
    // 3,使用字符串索引签名 ,含义是，用任意的字符串去索引List，得到的值可以是任意类型
    [propname:string]:any;

    // 可选属性
    age?:number,

    // 只读属性
    readonly husa?:string,
}

interface Result {
    data:List[]
}

function render(result:Result){
    result.data.forEach((value)=>{
        console.log(value.id,value.name);
        if(value.age){
            console.log(value.age)
        }
    })
}

// ts鸭式辨形法

// 三种方法绕过ts对多余属性的检查。

// 1，使用变量赋值 
let result = {
    data:[
        {id:1,name:'james',sex:'男'},
        {id:2,name:"kobe"}
    ]
}

render(result);


// 2，可以使用类型断言的方式
render({
    data:[
        {id:1,name:'james',sex:'男'},
        {id:2,name:"kobe"}
    ]
} as Result)

// 这种类型断言的方式不适用于jsx语法
render(<Result>{
    data:[
        {id:1,name:'james',sex:'男'},
        {id:2,name:"kobe"}
    ]
}
)

// 3，使用字符串索引签名
render({
    data:[
        {id:1,name:'james',sex:'男'},
        {id:2,name:"kobe"}
    ]
})


// 定义数字索引接口，当用数字去索引StringArray的时候，返回的值的类型是string
interface StringArray{
    [index:number]:string //相当于定义了一个字符串数组
}

let chars:StringArray = ['a','b']

// 字符串索引接口
interface Names{
    [propname:string]:string;
    // y:number
    [z:number]:string;  //这里需要注意的是，数字索引签名的返回值一定要是字符串索引签名的返回值，这是因为js中会进行类型转换。将number转换为string
    // js中对象的key会被自动转换为string类型，所以[z:number]:string;===>[z:string]:string。如果不这么做的话就会产生冲突。
}

// 函数接口
let add1:(x:number,y:number)=>number

interface Add{
    (x:number,y:number):number
}

type Add2 = (x:number,y:number)=>number

let husa:Add = (a , b)=>a+b;

// 混合类型的接口
interface Lib{
    ():void;
    version:string,
    doSomething():void;
}

let lib:Lib = (()=>{}) as Lib; //使用类型断言
lib.version = '1.0'
lib.doSomething = () =>{}

function getLib():Lib{
    let lib:Lib = (()=>{}) as Lib;
    lib.version = '1.0';
    lib.doSomething = ()=>{};
    return lib
}
const l1 = getLib()
const l2 = getLib()
