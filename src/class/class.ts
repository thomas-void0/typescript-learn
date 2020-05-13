class Dog{
    name:string;
    constructor(name:string){ // private 私有后，既不能被实例化，也不能被继承 protected 不能够被实例化只能被继承。相当于是一个基类
        this.name = name;
    }
    public run(){} //共有
    private pri(){} //私有成员
    protected pro(){} //只能在类和子类中被调用，不能被实例调用
    readonly legs:number = 4; //只读属性一定要被初始化
    static food:string = 'bones' //类的静态成员只能被类名调用,可以被继承

}

// 都是实例方法
console.log(Dog.prototype)
let dog = new Dog('wangwang')
console.log(dog)

console.log(Dog.food)

// 类的继承
class Husky extends Dog{
    constructor(name:string,public color:string){
        super(name) //代表父类的实例
        // 在构造函数中初始化
        // this.color = color;
    }
    // color:string
}

console.log(Husky.food)









