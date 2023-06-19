// router.js

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  // 定義你的路由配置
  {
    path: '/',
    redirect: '/home' // 路由首頁的重定向設定
  },
  {
    path: '/Home',
    component: () => import('./components/Home.vue')
  },
  {
    path: '/JP',
    name: 'JP',
    component: () => import('./components/JP.vue')
  },
  {
    path: '/CN-HK-MO',
    name: 'CN-HK-MO',
    component: () => import('./components/CN-HK-MO.vue')
  },
  {
    path: '/EURO',
    name: 'EURO',
    component: () => import('./components/EURO.vue')
  },
  {
    path: '/US-CA',
    name: 'US-CA',
    component: () => import('./components/US-CA.vue')
  },
  {
    path: '/MX',
    name: 'MX',
    component: () => import('./components/MX.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});


export default router;
