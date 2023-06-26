import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { useUserStore } from '../store/user'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/test',
  },
  {
    path: '/test',
    name: 'Test',
    meta: {
      title: '测试',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import('../view/testPage.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import('../view/loginPage.vue'),
  },
  {
    path: '/manage',
    name: 'Manage',
    meta: {
      title: '管理',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import('../view/managePage.vue'),
  },
  {
    path: '/analysis',
    name: 'Analysis',
    meta: {
      title: '分析',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import('../view/analysisPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 路由守卫
// router.beforeEach(async (to, from, next) => {
//   // 检查是否需要进行 token 检验
//   if (to.path === '/login') {
//     // 如果目标路由是登录页，直接继续导航
//     next()
//   } else if (!useUserStore().token) {
//     // 如果需要 token 检验但没有 token，则重定向到登录页或其他处理方式
//     next('/login')
//   } else {
//     // 继续导航
//     next()
//   }
// })

export default router
