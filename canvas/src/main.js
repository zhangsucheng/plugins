import Vue from 'vue'
import App from './App.vue'
import animated from 'animate.css'
import store from './store/index'
Vue.config.productionTip = false
Vue.use(animated)
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
