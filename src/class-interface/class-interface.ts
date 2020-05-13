interface Human{
    // 接口不能约束类的构造函数
    // new (name:string):void
    //接口只能约束类的公有成员
    name:string,
    eat():void
}

class Asian implements Human{
    constructor(public name:string){

    }
    eat(){

    }

}

// 接口的继承
interface Man extends Human{
    run():void
}

interface Child{
    cry():void
}

interface Boy extends Man,Child{

}

let boy:Boy={
    name:'',
    run(){},
    eat(){},
    cry(){}
}


// 接口继承类,接口也可以抽离类的公有私有和受保护成员，类也可以实现接口

class Auto{
    state = 1; //定义一个成员
    // protected state2 = 2; //类也可以包含受保护成员，同样会被接口所抽离，但是这个时候只有子类才能正常实现抽离了父类成员的接口
    // private state3 = 3;
}

// 接口抽离了类的成员，实现这个接口的时候就必须包含类的成员
interface AutoInterface extends Auto{

}

// 实现接口
class C implements AutoInterface{
    state = 1
}

class husa2 extends Auto implements AutoInterface{

}