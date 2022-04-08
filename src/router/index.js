import { createRouter, createWebHistory } from 'vue-router'
import Appoinment from '@/views/AppoinmentView.vue';
import AuthView from '@/views/AuthView.vue';

const routes = [
  {
    path: '/appointment',
    name: 'appointment',
    component: Appoinment
  },
  {
    path: '/',
    name: 'AuthView',
    component: AuthView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
