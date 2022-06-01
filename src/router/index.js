import { createRouter, createWebHashHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/LoginView.vue'),
  },
  {
    path: '/home/:id',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/RegisterView.vue'),
  },
  {
    path: '/resetpassword',
    name: 'resetpassword',
    component: () => import('@/views/ResetPasswordView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
