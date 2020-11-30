import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Calc from './components/Calc.vue'
import store from './store'

const routes = [{ name: 'Home', path: '/:building/:level', component: Calc }]
const router = new VueRouter({ /*mode: 'history',*/ routes })

Vue.config.productionTip = false
Vue.use(VueRouter)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
