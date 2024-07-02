import { createApp } from 'vue';  
import App from './App.vue';  
import axios from 'axios';  
  
// 创建一个 axios 实例  
const http = axios.create({  
  baseURL: 'http://localhost:3000/',  
  // 其他配置...  
});  
  
// 创建一个 Vue 应用  
const app = createApp(App);  
  
// 将 axios 实例添加到 Vue 应用的原型上  
app.config.globalProperties.$http = http;  
  
// 挂载 Vue 应用  
app.mount('#app');
