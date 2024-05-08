import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './style.scss';
import 'uno.css'

import MasonryWall from '@yeger/vue-masonry-wall'

const app = createApp(App)
app.use(router)
app.use(MasonryWall)
app.mount('#app')
