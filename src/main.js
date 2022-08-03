import { createApp } from 'vue'
import App from './App.vue'
import TheWrapper from "@/components/TheWrapper";

const app = createApp(App);

app.component('the-wrapper', TheWrapper);

app.mount('#app');
