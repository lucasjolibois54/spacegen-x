import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNuxtApp } from '#app';

export default () => {
  if (process.client) {
    const app = useNuxtApp();
    app.AOS = AOS.init({ once: true });
  }
};
