import Vue from 'vue'
import VueRouter from 'vue-router'
import baseRoutes from './baseRoutes.js'
import store from '@/store/index' //vuex
Vue.use(VueRouter)

//处理 同一个地方（路由）触发了两次的报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

//路由白名单
const whiteListName = ["login", "404", "401"]


//静态资源目录
function fnStatic() {
  if (process.env.ENV === 'test') {
    return "/test/"
  } else if (process.env.ENV === 'build') {
    return "/build/"
  } else {
    return "/"
  }
}


const router = new VueRouter({
  mode: 'hash',
  base: fnStatic(),
  routes:baseRoutes
})






export default router
