let layout = () => import("@/layout/index.vue")

const routes = [
  {
    path: "/",
    component: layout,
    meta: {},
    children: [{
      path: 'home',
      name: 'home',
      component: () => import("@/views/home/index.vue"),
      meta: {
        title: '首页',
        icon: 'dashboard',
        isAffix: true,
        // hidden: true,
      }
    }]
  },
]

export default routes
