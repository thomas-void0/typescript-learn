/// <reference path="a.ts"/>
// 两个文件中的同名命名空间是共享的,需要被外界使用的方法 需要使用export导出
// 命名空间中不可以对同名属性重复定义，接口是可以的
namespace Shape{
    export function b(){
        console.log("bbbb")
    }
}
Shape.b();