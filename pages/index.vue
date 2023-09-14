
    <template>
    <ProtectedPage>
        <Hero/>
        <ModalVideo/>

    </ProtectedPage>
  </template>
  
  <script setup>
  import ProtectedPage from '@/components/main/ProtectedPage.vue';
  import Hero from '~/components/home/Hero.vue';
import ModalVideo from '~/components/home/ModalVideo.vue';
  </script>
  
