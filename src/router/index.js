import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import FirebasePush from '../views/FirebasePush.vue';
import Graph from '../views/Graph.vue';

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
      name: 'graph',
      component: Graph,
    },
  ],
});

export default router;
