let validators = {
    "name":{
        validate:(value)=>{
            console.log("validator set keyValue",value)
            let res = true;
            if(typeof value == "number"){
                res = false
            }
            return res
        },
        message:"错误格式数据"
    }

};
let form = {
    name:"sucheng"
};
let validator = function (obj,validators) {
    return new Proxy(obj,{
        set(target, p, value, receiver) {
            let validateRes = validators[p].validate(value)
            if(validateRes){
               target[p] = value
            } else {
                console.log(new Error(validators[p].message))
            }
        }
    })
};
console.log(form)
let validatorProxy = validator(form,validators);
validatorProxy.name = "suziyoudian"
console.log(form)
console.log(validatorProxy)


module.exports = validatorProxy;
