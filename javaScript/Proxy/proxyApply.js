function foo(a,b) {
    return a + b
}


const proxyFnApply = new Proxy(foo,{
    apply(target, thisArg, argArray) {
        console.log("proxy apply",target,thisArg,argArray)
        return target(argArray[0],argArray[1])*100
    }
});

console.log(foo(1,2))
console.log(proxyFnApply(1,2))

module.exports = proxyFnApply