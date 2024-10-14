import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import FirebasePush from '../views/FirebasePush.vue';
import Chart from '../views/Chart.vue';
import Graph2 from '@/views/Graph2.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/fire',
      name: 'fire',
      component: FirebasePush,
    },
    {
      path: '/search',
      name: 'chart',
      component: Graph2,
    },
  ],
});

export default router;
