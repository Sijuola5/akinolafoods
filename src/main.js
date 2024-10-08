import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";

try {
  const app = createApp(App);
  app.use(router);
  app.mount('#app');
} catch (error) {
  console.error('Error creating or mounting the app:', error);
}