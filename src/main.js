import Vue from 'vue'
import App from './App.vue'
import store from './store' //vuex
import router from './router/index'//路由
import '@/styles/index.scss'; //全局样式


/** 全局插件 *******************************************************************************************************/
//elemnet
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//vxe
import XEUtils from 'xe-utils'
Vue.prototype.$utils = XEUtils
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
Vue.use(VXETable)

/** 自定义组件 *******************************************************************************************************/
//图标组件
import svgIcon from '@/components/svgIcon'
Vue.component("svgIcon", svgIcon)

//page
import page from '@/components/base/page'
Vue.component("page", page)

//baseform
import baseForm from '@/components/base-form'
Vue.component("baseForm", baseForm)

/** mixin *******************************************************************************************************/
import baseFormMixin from "@/mixins/baseForm";
Vue.mixin(baseFormMixin)

/** 原型链 *******************************************************************************************************/
//常用函数
import * as fn from "@/utils/fn.js"
Vue.prototype.$fn = fn;

//校验规则
import * as validator from "@/utils/validate"
Vue.prototype.$validator = validator;

//文件后缀名
Vue.prototype.$fileType = ["pdf", "doc", "docx", "xls", "xlsx", "jpg", "jpeg", "gif", "png"]

// Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
