import { createApp } from 'vue'
import App from './App.vue'
import NarrowWrapper from "@/components/NarrowWrapper";
import WideWrapper from "@/components/WideWrapper";

const app = createApp(App);

app.component('narrow-wrapper', NarrowWrapper);
app.component('wide-wrapper', WideWrapper)

app.mount('#app');
