import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Dashboard.vue')
    },
    {
      path: '/media',
      name: 'media',
      component: () => import('../views/Media.vue')
    },
    {
      path: '/diary',
      name: 'diary',
      component: () => import('../views/Diary.vue')
    },
    {
      path: '/diary/history',
      name: 'diary-history',
      component: () => import('../views/DiaryHistory.vue')
    },
    {
      path: '/consultation',
      name: 'consultation',
      component: () => import('../views/Consultation.vue')
    },
    {
      path: '/mitra/akses',
      name: 'mitra-akses',
      component: () => import('../views/MitraAccess.vue')
    },
    {
      path: '/mitra/beli-kuota',
      name: 'mitra-dashboard',
      component: () => import('../views/MitraDashboard.vue')
    }
  ]
})

export default router
