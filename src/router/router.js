import { createRouter, createWebHashHistory } from 'vue-router';
import MainLayout from '../views/MainLayout.vue';
import Startpage from '../views/Startpage.vue';
import SliderStart from '../components/SliderStart.vue';

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        component: Startpage,
      },
      {
        path: '/projects/:id', 
        component: SliderStart,
        props: true, 
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory('/portfolio-2023'),
  routes,
});

export default router;
