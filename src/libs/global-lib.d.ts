declare function globalLib(options:{[key:string]:any}):void;
declare namespace globalLib{
    export let version:string;
    export let doSomething:()=>void;
}