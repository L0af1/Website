// Entry point for the Vue application
// first time learning how the router works and i think i get the jist of it
import { createApp } from 'vue'
import App from './App.vue'
import router from './index.js'

createApp(App).use(router).mount('#app')


