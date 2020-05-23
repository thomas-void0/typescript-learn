declare function moduleLib(options:Options):void;
interface Options{
    [key:string]:any
}
declare namespace moduleLib{
    let version:string;
    function doSomething():void;
}

export = moduleLib; //导出  这里的兼容性是最好的