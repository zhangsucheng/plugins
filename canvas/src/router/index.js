import Vue from "vue"
import VueRouter  from "vue-router"
import routes from "./router"
Vue.use(VueRouter);
const router  =  new VueRouter({
    routes,
    mode:"hash"
});
router.beforeEach((to, from, next)=> {
    if (to.name) {
        next()
    } else {
        next({replace:true,name:"canvas"})
    }
})
export default router

