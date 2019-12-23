import Vue from 'vue'
import App from './App.vue'
import router from './router'

<<<<<<< HEAD
// 倒入element-ui相关资源
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

=======
>>>>>>> e914b412971f14dfd5288b8b56d5a3cd64ba0f19
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
