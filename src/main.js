import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import 'normalize.css';
import './style.css';
import '@splidejs/vue-splide/css';


createApp(App).use(router).mount('#app')