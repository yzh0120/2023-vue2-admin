let layout = () => import("@/layout/index.vue")
import baseForm from "./modules/1-base-form.js"
import vxeTable from "./modules/2-vxe-table.js"

const routes = [
  {
    path: "/",
    redirect: "/home",
    component: layout,
    meta: {},
    children: [{
      path: 'home',
      name: 'home',
      component: () => import("@/views/base/home.vue"),
      meta: {
        title: '首页',
        icon: 'dashboard',
        isAffix: true,
        // hidden: true,
      }
    }]
  },
  {
    path: '/blank',
    name: 'blank',
    component: layout,
    meta: {
      hidden: true,
    },
  },

  {
    path: "/login",
    name: 'login',
    component: () => import("@/views/base/login.vue")
  },
  baseForm, //表单
  vxeTable,
]

export default routes
