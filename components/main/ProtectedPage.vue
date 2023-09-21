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

// Initialize refs for states
const displayPage = ref(false);
const displayPageDevice = ref(window.innerWidth >= 768);

// update the display state based on window width
const updateDisplayState = () => {
  displayPageDevice.value = window.innerWidth >= 768;
};

onMounted(() => {
  // listener for window resize to handle display for smaller devices
  window.addEventListener('resize', updateDisplayState);

  // Login
  const user = localStorage.getItem('validUser');
  displayPage.value = user && user !== 'undefined';
});

// Clean up the to avoid memory leaks
onUnmounted(() => {
  window.removeEventListener('resize', updateDisplayState);
});

// Initially set the displayPageDevice based on window width
updateDisplayState();
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