import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import tabbarcenter from './components/content/tabbar/tabbarcenter.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Vant from 'vant';
import 'vant/lib/index.css';
import 'default-passive-events'
import mitt from "mitt"
const app = createApp(App);
app.config.globalProperties.$bus = new mitt();
app.component("tabbarcenter",tabbarcenter).use(store).use(router).use(Vant)
app.mount('#app')

