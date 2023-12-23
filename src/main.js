//=======================
// Import
//=======================
import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import Icons from "./components/Icons.vue";
import router from './router'

//=======================
// Consts
//=======================
const app = createApp(App);
app.use(router);
app.component("Icons", Icons);
app.mount('#app');