import Vue from 'vue'
import App from './App.vue'
import store from './store' //vuex
import router from './router/index'//路由
import '@/styles/index.scss'; //全局样式




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

//文件
import fileList from '@/components/file/fileList'
Vue.component("fileList", fileList)

import fileListShow from '@/components/file/fileListShow'
Vue.component("fileListShow", fileListShow)

import oneFile from '@/components/file/oneFile'
Vue.component("oneFile", oneFile)

//alert
import alert from '@/components/alert'
Vue.component("alert", alert)

//pager
import basePager from '@/components/base-pager'
Vue.component("pager", basePager)

//panel
import panel from '@/components/panel'
Vue.component("panel", panel)

//navPage
import navPage from '@/components/base/navPage'
Vue.component("navPage", navPage)

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

/** 自定义指令 *******************************************************************************************************/
//对金额的输入框去除逗号（,）时，只需加上指令 v-enter-money 即可
Vue.directive("enterMoney", {
  bind: function (el) {
    el = el.nodeName == "INPUT" ? el : el.children[0];
    el.addEventListener("change", function () {
      el.value = el.value.replace(/,|，|\s/gi, "");
      el.dispatchEvent(new Event("input"));
    })
  }
})

/** 插件 *******************************************************************************************************/
//VueSocketIO
import VueSocketIO from 'vue-socket.io'
Vue.use(new VueSocketIO({
  debug: true, //开启debug模式
  connection: 'http://localhost:4000', //连接地址
  options: {
    autoConnect: false, //是否一进网站就链接socket
    query: {
      token: ''
    },
  },
}))

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

//v-charts
import 'echarts/lib/component/dataZoom'
import 'v-charts/lib/style.css'
import VCharts from 'v-charts'
Vue.use(VCharts)

// Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
