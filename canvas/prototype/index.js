import dynamicPoint from "../src/components/dynamicPoint/index"

let lesCanvas = {
    install (Vue, options) {
        options = options || {}
        Vue.prototype.lesExt = options
        Vue.component('dynamic-point', dynamicPoint)
    }
}
export default lesCanvas




