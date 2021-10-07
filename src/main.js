import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import tabbarcenter from './components/content/tabbar/tabbarcenter.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { Swipe, SwipeItem } from 'vant';
import { Tab, Tabs } from 'vant';
import { Sticky } from 'vant';
import 'vant/lib/index.css';
import 'default-passive-events'

createApp(App).component("tabbarcenter",tabbarcenter)
.use(store).use(router).use(Swipe).use(SwipeItem).use(Tab).use(Tabs).use(Sticky).mount('#app')

