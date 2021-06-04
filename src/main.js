import '@/assets/style/style.scss'
import '@/assets/style/sidebar/vue-sidebar-menu.scss'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import { createApp } from 'vue'

import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

createApp(App).use(router, store).mount('#app')
