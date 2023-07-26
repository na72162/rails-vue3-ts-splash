import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    // urlのパスの名前
    path: '/',
    // このルート自体の名前
    name: 'HomePage',
    component: () =>
          import ('@/views/HomePage.vue'),
  },
  {
      path: '/register',
      component: () =>
          import ('@/views/UserRegistration.vue'),
  },
  // {
  //   path: '/login',
  //   component: () =>
  //       import ('./components/user/UserLogin.vue'),
  // },
  // {
  //   path: '/password_reminder',
  //   component: () =>
  //       import ('./components/user/PasswordReminder.vue'),
  // },
  // {
  //   path: '/logout',
  //   component: () =>
  //       import ('./components/user/UserLogout.vue'),
  // },
  // {
  //   path: '/withdraw',
  //   component: () =>
  //       import ('./components/user/UserWithdraw.vue'),
  // },

  // {
  // // これ書き方違うかも
  //   path: '/mypage/:user_id',
  //   component: () =>
  //       import ('../components/user/UserMypage.vue'),
  // },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
