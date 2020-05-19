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
}