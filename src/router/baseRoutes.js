let layout = () => import("@/layout/index.vue")

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
]

export default routes
