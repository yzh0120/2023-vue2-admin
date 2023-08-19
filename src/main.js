import Vue from 'vue'
import App from './App.vue'
import store from './store' //vuex
import router from './router/index'//路由
import '@/styles/index.scss'; //全局样式



//elemnet
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


//图标组件
import svgIcon from '@/components/svgIcon'
Vue.component("svgIcon", svgIcon)


Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
