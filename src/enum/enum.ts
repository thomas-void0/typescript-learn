// 枚举类型,一组有名字的常量集合。例如通讯录中的联系人，只用知道名字即可。不需要知道其具体的电话号码
// 数字枚举,默认的值都是数字
enum Role{
    Reporter,
    Developer,
    Maintainer,
    Owner,
    Guest
}

console.log(Role.Reporter)
console.log(Role)

// 字符串枚举
enum Message{
    Success="成功",
    Fail="失败"
}

// 异构枚举：就是字符串枚举和数字枚举的混用,容易引起混淆，不推荐使用
enum Answer{
    N,
    Y='yes'
}

// 枚举成员不能够被修改
// Role.Reporter = 'ss'

// 枚举成员:常量枚举成员，计算枚举成员两种
// 常量枚举成员就是，在编译阶段就计算出结果，在运行时以常量的形式出现在运行环境。
// 计算枚举成员就是，在编译阶段保留表达式，在运行时再进行计算得出结果使用。

enum Char{
    // const
    a,
    b = Char.a,
    c = 1,

    // computed ,在computed枚举成员后面的枚举成员必须具有初始值，否则无法使用
    d = Math.random(),
    e = '123'.length,
    // f
    f = 2,
}

// 常量枚举的特性是：在编译过后就删除。作用是，当我们不需要一个对象，而是需要对象的值的时候就可以使用常量枚举。这样可以减少我们在编译环境的代码。
const enum Name{
    Jane,
    Husa,
    Kaka
}

let name2 = [Name.Jane,Name.Husa,Name.Kaka]

// 枚举类型,在某些情况下，枚举和枚举成员都可以单独作为一种类型存在。
enum E {a,b} //没有初始值的枚举
enum F {a = 0,b = 1} //数字枚举
enum G {a = 'apple',b = 'banana'} //字符串枚举

let e:E = 3;
let f:F = 3;
// 两种枚举类型无法进行比较,取值可以超出枚举类型的定义
// e === f

let e1:E.a = 1;
let e2:E.b;
let e3:E.a = 1;
e1 === e3;


// 字符串枚举的取值，只能是其枚举成员的类型
let g1:G = G.b;
let g2:G.a = G.a; //这样就只能取它本身的值了
