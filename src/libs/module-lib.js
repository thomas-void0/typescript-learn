const version = '1.0'

function doSometing(){
    console.log('do something')
}

function moduleLib(options){
    console.log(options)
}

moduleLib.version = version;
moduleLib.doSometing = doSometing;

module.exports = moduleLib;