export namespace Check{
    // 基本的类型推断
    // let a = 1;
    // let b = '22';
    // let c = [];
    // let d = [1,null]

    // 函数的类型推断
    let f = (x = 1)=>x+1;
    let f1 = (x = 1)=>{};

    // 上下文的类型推断，一般发生在事件绑定中。根据执行上下文推荐出类型
    window.onclick = (event:MouseEvent)=>{
        
    }

    // 类型断言,类型断言就是我们告诉编译器。我知道我这个变量的类型是什么，不需要你帮助我进行判断。
    // 优点：增加了语言的灵活性，缺点：不能滥用，否则会导致代码出现隐患
    interface Foo{
        bar:number
    }
    let foo:Foo = {} as Foo;
    foo.bar = 2;
}