import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
import { router } from './router';
import { createPinia } from 'pinia';

const pinia = createPinia()
createApp(App)
    .use(pinia)
    .use(router)
    .use(Antd)
    .mount('#app')
