namespace AdvancedType{
    // 交叉类型和联合类型
    // 交叉类型
    interface DogInterface{
        run():void
    }

    interface CatInterface{
        jump():void
    }

    // pet具有两个接口的所定义的方法
    let pet:DogInterface & CatInterface = {
        run(){},
        jump(){}
    }

    // 联合类型,具有2者中的一种
    let a:number | string = 'a';

    // 字面量类型,b只能为a 和 b中的一个
    let b:'a' | 'b' = 'a'

    //联合类型
    class Dog implements DogInterface{
        run(){}
        eat(){}
    }

    class Cat implements CatInterface{
        jump(){}
        eat(){}
    }

    enum Master{Boy,Girl}
    function getPet(master:Master){
        let pet = master === Master.Boy ? new Dog() : new Cat();
        pet.eat();
        // (pet as Dog).run()
        return pet;
    }

    // 联合类型存在的问题
    interface Square{
        kind:"square";
        size:number
    }

    interface Rectangle{
        kind:"rectangle";
        width:number,
        height:number
    }

    interface Circle{
        kind:'circle',
        r:number
    }

    type Shape = Square | Rectangle;
    function area(s:Shape){
        switch(s.kind){
            case "square":
                return s.size * s.size;
            case "rectangle":
                return s.height * s.width;
        }
    }

    // 如果只是联合2个并没有问题，但是如果联合多个并且不定义剩余的接口的话。TS编译器也并不会报错。如果需要唤起TS编译器的正常检查
    //必须要default 或者是指定函数的返回值。这个时候TS的编译器就会检查联合类型是否被全部实现了

    type Shape2 = Square | Rectangle | Circle;
    // 解决方式一：指定函数返回值 
    function area2(s:Shape2):number{
        switch(s.kind){
            case "square":
                return s.size * s.size;
            case "rectangle":
                return s.height * s.width;
            case "circle":
                return Math.PI * s.r ** 2;
            default:
                return ((e:never)=>{throw Error(e)})(s) //解决方式二：使用default抛出异常。检查s是不是never类型，如果s是never类型的话，说明前面的分支都被覆盖了。这个分支永远不会到达。如果s
                // 不是never类型的话，就说明前面的分支有遗漏。
        }
    }


    // 索引类型
    let obj = {
        a:1,
        b:2,
        c:3
    }
    function getValues(obj:any,keys:string[]){
        return keys.map(key=>obj[key]);
    }
    // 这个时候即使你传入的key不是obj中所有的，ts也不会报错。很显然这不是需要的效果 
    getValues(obj,['a','b'])
    getValues(obj,['e','f'])

    // keyof T 的意思就是返回这个类型T中所有公共属性的字面量的联合类型。['a':1,'b':2] ===> ['a','b']
    interface Obj{
        a:number,
        b:string
    }
    let key:keyof Obj; //返回了a，b属性字面量key的联合类型

    // T[K] 表示对象T的属性K所代表的类型
    let value:Obj['a'] //value的类型就和Obj['a']的类型一致。

    // T extends U 泛型变量可以继承某个类型或者某些属性


    // 让K继承所有obj属性的联合类型  ,这个时候keys数组就是obj属性的联合类型数组 ,返回值就是T[K][] 表示的是对象T的属性K的值所代表的类型
    function getValues2<T,K extends keyof T>(obj:T,keys:K[]):T[K][]{
        return keys.map(key=>obj[key])
    }

    // 索引类型配合泛型 泛型约束就能够使我们建立对象--》对象属性--》属性值之间的约束关系


    // 映射类型，可以从一个旧的类型生成一个新的类型
    // 可以快速的生成只读、可选、抽取等属性操作。
    interface Obj2{
        a:string
        b:string,
        c:boolean
    }

    // 被官方称为同态，因为它们只会作用于Obj2属性而不会引用新属性。

    // 快速生成一个只读的类型
    type ReadOnlyObj2 = Readonly<Obj2>;

    // 快速生成一个可选的属性
    type PartialObj2 = Partial<Obj2>

    // 抽取子集
    type PickObj2 = Pick<Obj2,'a' | 'b'>

    // 创建一些新的属性,非同态
    type RecordObj = Record<'x' | 'y',Obj>
}