import { createApp } from 'vue';
import axios from 'axios';
// axios
import VueAxios from 'vue-axios';
// pinia
import { createPinia } from 'pinia';
import App from './App.vue';
// vue router
import router from './router';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

const app = createApp(App);
app.use(VueAxios, axios);
app.use(createPinia());
app.use(router);
app.mount('#app');
