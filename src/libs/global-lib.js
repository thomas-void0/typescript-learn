function globalLib(options){
    console.log(options);
}

globalLib.version = '1.0'
globalLib.doSomething = function(){
    console.log("globalLib do something");
}
//类库一般分为三种: 全局  模块  UMD

export default globalLib;