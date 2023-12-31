import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import("../components/HomeView.vue")
    },
    {
      path: '/details/:id',
      name: 'details',
      component: () => import('../components/Details.vue')
    }
  ]
})

export default router
