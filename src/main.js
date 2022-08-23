import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)
app.config.globalProperties.$axios = axios
axios.defaults.baseURL = '/aposServer'
axios.defaults.headers.post['Content-Type'] = 'application/json';

app.use(store).use(router).use(ElementPlus).use(VueAxios,axios).mount('#app')

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }