import { createRouter, createWebHashHistory } from 'vue-router';
import MainLayout from '../views/MainLayout.vue';
import Startpage from '../views/Startpage.vue';
import Contact from '../components/Contact.vue'
import CV from '../components/Cv.vue'
import Slider from '../components/Slider.vue';


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
            path: '/portfolio',
            component: Slider,
        },
        {
            path: '/cv',
            component: CV,
        },
        {
          path: '/contact',
          component: Contact,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;