import { createApp } from 'vue'
import App from './App.vue'
import '@/index.css';
import router from './router/router';  // 라우터 설정 가져오기

const app = createApp(App);

app.use(router);  // Vue 인스턴스에 라우터 연결
app.mount('#app');