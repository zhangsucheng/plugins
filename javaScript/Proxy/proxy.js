const person = {
    name:"suzi"
};

const proxyPerson = new Proxy(person,{
    get(target, p, receiver) {
        console.log("get handle")
    },
    set(target, p, value, receiver) {
        console.log("set handle",target,p,value,receiver)
    }
})

console.log(person == proxyPerson)
proxyPerson.name
proxyPerson.name = "sb"

module.exports = proxyPerson