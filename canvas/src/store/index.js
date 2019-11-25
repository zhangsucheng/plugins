import Vue from 'vue'
import Vuex from 'vuex'
import app from "./modules/app"
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        appName:"myCanvas"
    },
    getters:{},
    mutations:{},
    actions:{
        dispatchMain:function () {
            console.log("main dispatch")
        }
    },
    modules:{
        app:app
    }
})
