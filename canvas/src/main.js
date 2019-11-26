import Vue from 'vue'
import App from './App.vue'
import animated from 'animate.css'
import store from './store/index'
import router from  "./router/index"
Vue.config.productionTip = false
Vue.use(animated)
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
