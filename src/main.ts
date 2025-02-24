import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersistedstate from 'pinia-plugin-persistedstate';
import { createBootstrap } from 'bootstrap-vue-next'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

const pinia = createPinia();
pinia.use(piniaPersistedstate);

const app = createApp(App);
app.use(pinia);
app.use(createBootstrap());
app.mount('#app');
