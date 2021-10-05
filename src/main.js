import { createApp } from 'vue';
import App from './App.vue';

// router，匯入 router 物件，( 物件內容為路由表 )
import router from './router';

// 使用 router 物件，路由表
createApp(App).use(router).mount('#app');
