namespace Safe{

    enum Type{
        Strong,
        Week
    }

    class Java{
        javaPrint(){
            console.log("hello java");
        }
    }
    class JavaScript{
        javaScriptPrint(){
            console.log("hello javaScript");
        }
    }

    // 创建一个类型保护函数,(lang is Java的写法叫做类型谓词)
    function isJava(lang:Java | JavaScript):lang is Java{
        return (lang as Java).javaPrint !== void 0;
    }

    function isHusa(x:boolean | string):x is string{
        return (x as string).length !== void 0;
    }

    function getLanguage(type:Type,x:number | string ){
        let lang = type === Type.Strong ? new Java() : new JavaScript();

        //1,使用类型断言的方式
        // if((lang as Java).javaPrint){
        //     (lang as Java).javaPrint();
        // }else{
        //     (lang as JavaScript).javaScriptPrint();
        // }   

        //2,使用instanceof创建保护区块
        if(lang instanceof Java){
            lang.javaPrint()
        }else{
            lang.javaScriptPrint();
        }

        //3.使用in
        if('javaPrint' in lang){
            lang.javaPrint()
        }else{
            lang.javaScriptPrint()
        }

        //4. typeof
        if(typeof x === 'number'){

        }

        //5, 类型保护函数
        if(isJava(lang)){

        }else{

        }

        return lang;
    }
}