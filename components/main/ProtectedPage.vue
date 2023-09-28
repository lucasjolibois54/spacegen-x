<!-- HOC-->
<template>
  <div v-if="displayPage && displayPageDevice">
    <slot></slot>
  </div>
  <h1 class="text-red-500 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
  " v-else-if="!displayPageDevice">
    You cannot access the Software on smaller devices
  </h1>
  <h1 class="text-red-500 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
  " v-else>
    This page is protected
  </h1>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const displayPage = ref(false);
const displayPageDevice = ref(true);

const updateDisplayState = () => {
  if (typeof window !== 'undefined') {
    displayPageDevice.value = window.innerWidth >= 768;
  }
};

onMounted(() => {
  window.addEventListener('resize', updateDisplayState);
  const user = localStorage.getItem('validUser');
  displayPage.value = user && user !== 'undefined';
  // Initially set the displayPageDevice based on window width
  updateDisplayState();
});

onUnmounted(() => {
  window.removeEventListener('resize', updateDisplayState);
});
</script>




<!-- <template>
    <div v-if="displayPage">
      <slot></slot>
    </div>
    <h1 class="text-red-500" v-else>This page is protected</h1>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const displayPage = ref(false)
  
  onMounted(() => {
    const user = localStorage.getItem('validUser')
    displayPage.value = user && user !== 'undefined'
  })
  </script> -->