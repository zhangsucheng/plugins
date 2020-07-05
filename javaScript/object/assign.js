const assign =  function () {
    let a  = {
        name:"suzi"
    };
    let b = Object.assign({
        age:27
    },a)

    console.log(b)
};

module.exports = assign;


