import { createRouter, createWebHistory } from 'vue-router'
import Meeting from '../views/Meeting.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/meetings',
    },
    {
      path: '/meetings',
      name: 'meetings',
      component: Meeting,
    },
  ],
})

export default router
